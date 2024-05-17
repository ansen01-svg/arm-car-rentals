import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs from "dayjs";
import ErrorMsgHolder from "@/app/components/error_msg/error_msg_holder";
import Form from "./form";
import getMilliseconds from "@/app/_lib/frontend/getMilliseconds";
import getDate from "@/app/_lib/frontend/getDate";
import compareTimes from "@/app/_lib/frontend/compareTimes";

export default function FormHolder(props) {
  const {
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    minDate,
    setShowForm,
    dispatch,
    fetchCars,
  } = props;

  const [disabled, setDisabled] = useState(false);
  const [fieldsError, setFieldsError] = useState("");
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [time1Error, setTime1Error] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

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

  // search cars form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    const paramObj = new URLSearchParams(params);
    const pud = paramObj.get("pickupDate");
    const dod = paramObj.get("dropoffDate");
    const put = paramObj.get("pickupTime");
    const dot = paramObj.get("dropoffTime");

    const pickupDay = getDate(pickupDate.format("DD/MM/YY"));
    const dropoffDay = getDate(dropoffDate.format("DD/MM/YY"));

    // check if state values have not changed
    if (
      dayjs(pud).format("DD/MM/YY") === dayjs(pickupDate).format("DD/MM/YY") &&
      dayjs(dod).format("DD/MM/YY") === dayjs(dropoffDate).format("DD/MM/YY") &&
      dayjs(put).format("HH:mm a") === dayjs(pickupTime).format("HH:mm a") &&
      dayjs(dot).format("HH:mm a") === dayjs(dropoffTime).format("HH:mm a")
    ) {
      setDisabled(false);
      setShowForm(false);
      return;
    }

    // if dropoff date is later than pickup date
    if (new Date(dropoffDay).getTime() < new Date(pickupDay).getTime()) {
      setFieldsError("Please enter the correct date and time.");
      setTimeError(false);
      setTime1Error(false);
      setDateError(true);
      setDisabled(false);
      return;
    }

    // check if both dates are same but pickup time is later than dropoff time
    if (
      pickupDate.format("DD/MM/YY") === dropoffDate.format("DD/MM/YY") &&
      compareTimes(dropoffTime.format("HH:mm a"), pickupTime.format("HH:mm a"))
    ) {
      setFieldsError("Please enter the correct date and time.");
      setTimeError(false);
      setDateError(false);
      setTime1Error(true);
      setDisabled(false);
      return;
    }

    // check if pick up date is today but pick time is set in the past
    if (pickupDate.format("DD/MM/YY") === dayjs().format("DD/MM/YY")) {
      const todaysPickupTime = getMilliseconds(
        pickupTime.format("HH:mm a"),
        pickupDay
      );
      const currentTime = new Date(Date.now()).getTime();

      if (todaysPickupTime < currentTime) {
        setFieldsError("Please enter the correct date and time.");
        setDateError(false);
        setTime1Error(false);
        setTimeError(true);
        setDisabled(false);
        return;
      } else {
        setFieldsError(false);
        setTimeError(false);
        setDisabled(false);
      }
    }

    setFieldsError("");
    setDateError(false);
    setTimeError(false);
    setTime1Error(false);

    // update url with fresh params
    const paramsObj = new URLSearchParams();
    paramsObj.set("pickupDate", pickupDate);
    paramsObj.set("dropoffDate", dropoffDate);
    paramsObj.set("pickupTime", pickupTime);
    paramsObj.set("dropoffTime", dropoffTime);

    const date = dayjs(pickupDate).format("MM/DD/YYYY");

    router.replace(`${pathname}?${paramsObj.toString()}`);
    setShowForm(false);
    fetchCars(date);
    setDisabled(false);
  };

  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-3 lg:px-20 lg:py-3">
      {fieldsError && <ErrorMsgHolder fieldsError={fieldsError} />}
      <Form
        disabled={disabled}
        dateError={dateError}
        timeError={timeError}
        time1Error={time1Error}
        pickupDate={pickupDate}
        dropoffDate={dropoffDate}
        pickupTime={pickupTime}
        dropoffTime={dropoffTime}
        minDate={minDate}
        handlePickupDateChange={handlePickupDateChange}
        handleDropoffDateChange={handleDropoffDateChange}
        handlePickupTimeChange={handlePickupTimeChange}
        handleDropoffTimeChange={handleDropoffTimeChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
