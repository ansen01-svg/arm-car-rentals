"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useReducer } from "react";
import dayjs from "dayjs";
import Form from "../form/form";
import ErrorMsgHolder from "../error_msg/error_msg_holder";
import FormHeader from "../form_header/form_header";
import getDate from "@/app/_lib/frontend/getDate";
import getMilliseconds from "@/app/_lib/frontend/getMilliseconds";
import { initialFormState, reducer } from "../form/form_reducer";
import compareTimes from "@/app/_lib/frontend/compareTimes";

export default function FormHoler() {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const [fieldsError, setFieldsError] = useState("");
  const [dateError, setDateError] = useState(false);
  const [date1Error, setDate1Error] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [time1Error, setTime1Error] = useState(false);

  const router = useRouter();

  // set min date
  useEffect(() => {
    if (state.pickupDate) {
      dispatch({
        type: "SET_MINDATE",
        payload: state.pickupDate.add(1, "day"),
      });
    }
  }, [state.pickupDate]);

  // date form events
  const handlePickupDateChange = (date) => {
    dispatch({ type: "SET_PICKUP_DATE", payload: date });
  };

  const handleDropoffDateChange = (date) => {
    dispatch({ type: "SET_DROPOFF_DATE", payload: date });
  };

  const handlePickupTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      dispatch({ type: "SET_PICKUP_TIME", payload: time });
    }
  };

  const handleDropoffTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      dispatch({ type: "SET_DROPOFF_TIME", payload: time });
    }
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const pickupDay = getDate(state.pickupDate.format("DD/MM/YY"));
    const dropoffDay = getDate(state.dropoffDate.format("DD/MM/YY"));

    // check if all the fields are present
    if (
      state.pickupDate.format("DD/MM/YY") === "Invalid Date" ||
      state.dropoffDate.format("DD/MM/YY") === "Invalid Date" ||
      state.pickupTime.format("HH:mm a") === "Invalid Date" ||
      state.dropoffTime.format("HH:mm a") === "Invalid Date"
    ) {
      setFieldsError("Please select dates and time");
      setDateError(true);
      setDate1Error(true);
      return;
    }

    // check if dropoff date is later than pickup date
    if (new Date(dropoffDay).getTime() < new Date(pickupDay).getTime()) {
      setFieldsError("Please enter the correct date and time.");
      setTimeError(false);
      setTime1Error(false);
      setDate1Error(false);
      setDateError(true);
      return;
    }

    // check if both dates are same but pickup time is later than dropoff time
    if (
      state.pickupDate.format("DD/MM/YY") ===
        state.dropoffDate.format("DD/MM/YY") &&
      compareTimes(
        state.dropoffTime.format("HH:mm a"),
        state.pickupTime.format("HH:mm a")
      )
    ) {
      setFieldsError("Please enter the correct date and time.");
      setTime1Error(true);
      setTimeError(false);
      setDateError(false);
      setDate1Error(false);
      return;
    }

    // check if pick up date is today but pick time is set in the past
    if (state.pickupDate.format("DD/MM/YY") === dayjs().format("DD/MM/YY")) {
      const todaysPickupTime = getMilliseconds(
        state.pickupTime.format("HH:mm a"),
        pickupDay
      );
      const currentTime = new Date(Date.now()).getTime();

      if (todaysPickupTime < currentTime) {
        setFieldsError("Please enter the correct date and time.");
        setDateError(false);
        setDate1Error(false);
        setTime1Error(false);
        setTimeError(true);
        return;
      } else {
        setFieldsError("");
        setTimeError(false);
      }
    }

    setFieldsError("");
    setDateError(false);
    setDate1Error(false);
    setTimeError(false);
    setTime1Error(false);

    const link = `/cars?pickupDate=${state.pickupDate}&dropoffDate=${state.dropoffDate}&pickupTime=${state.pickupTime}&dropoffTime=${state.dropoffTime}`;
    router.push(link);
  };

  return (
    <div className="w-full h-full px-6 py-10 flex flex-col gap-5 bg-white relative z-30 md:rounded-2xl">
      <FormHeader />
      {fieldsError && <ErrorMsgHolder fieldsError={fieldsError} />}
      <Form
        setFieldsError={setFieldsError}
        dateError={dateError}
        date1Error={date1Error}
        timeError={timeError}
        time1Error={time1Error}
        pickupDate={state.pickupDate}
        dropoffDate={state.dropoffDate}
        pickupTime={state.pickupTime}
        dropoffTime={state.dropoffTime}
        minDate={state.minDate}
        handlePickupDateChange={handlePickupDateChange}
        handleDropoffDateChange={handleDropoffDateChange}
        handlePickupTimeChange={handlePickupTimeChange}
        handleDropoffTimeChange={handleDropoffTimeChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
