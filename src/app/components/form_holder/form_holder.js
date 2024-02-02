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

export default function FormHoler() {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const [fieldsError, setFieldsError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

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

    // if dropoff date is later than pickup date
    if (new Date(dropoffDay).getTime() < new Date(pickupDay).getTime()) {
      setFieldsError(true);
      setTimeError(false);
      setDateError(true);
      return;
    }

    if (state.pickupDate.format("DD/MM/YY") === dayjs().format("DD/MM/YY")) {
      // check if pick up date is today but pick time is set in the past
      const todaysPickupTime = getMilliseconds(
        state.pickupTime.format("HH:mm a"),
        pickupDay
      );
      const currentTime = new Date(Date.now()).getTime();

      if (todaysPickupTime < currentTime) {
        setFieldsError(true);
        setDateError(false);
        setTimeError(true);
        return;
      } else {
        setFieldsError(false);
        setTimeError(false);
      }
    }

    setFieldsError(false);
    setDateError(false);
    setTimeError(false);

    const link = `/cars?pickupDate=${state.pickupDate}&dropoffDate=${state.dropoffDate}&pickupTime=${state.pickupTime}&dropoffTime=${state.dropoffTime}`;
    router.push(link);
  };

  return (
    <div className="w-full h-full px-6 py-10 flex flex-col gap-5 bg-white relative z-30 md:rounded">
      <FormHeader />
      {fieldsError && <ErrorMsgHolder />}
      <Form
        setFieldsError={setFieldsError}
        dateError={dateError}
        timeError={timeError}
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
