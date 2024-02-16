import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import dayjs from "dayjs";
import ErrorMsgHolder from "@/app/components/error_msg/error_msg_holder";
import Form from "./form";
import getMilliseconds from "@/app/_lib/frontend/getMilliseconds";
import getDate from "@/app/_lib/frontend/getDate";

export default function FormHolder(props) {
  const {
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    minDate,
    setShowForm,
    dispatch,
  } = props;

  const [fieldsError, setFieldsError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

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

    const pickupDay = getDate(pickupDate.format("DD/MM/YY"));
    const dropoffDay = getDate(dropoffDate.format("DD/MM/YY"));

    // if dropoff date is later than pickup date
    if (new Date(dropoffDay).getTime() < new Date(pickupDay).getTime()) {
      setFieldsError(true);
      setTimeError(false);
      setDateError(true);
      return;
    }

    // if pickupdate and dropoffdate are same but pickuptime is earlier then dropoff time

    // check if pick up date is today but pick time is set in the past
    if (pickupDate.format("DD/MM/YY") === dayjs().format("DD/MM/YY")) {
      const todaysPickupTime = getMilliseconds(
        pickupTime.format("HH:mm a"),
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

    // update url with fresh params
    const paramsObj = new URLSearchParams();
    paramsObj.set("pickupDate", pickupDate);
    paramsObj.set("dropoffDate", dropoffDate);
    paramsObj.set("pickupTime", pickupTime);
    paramsObj.set("dropoffTime", dropoffTime);

    router.replace(`${pathname}?${paramsObj.toString()}`);

    // close form
    setShowForm(false);
  };

  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-3 lg:px-20 lg:py-3">
      {fieldsError && <ErrorMsgHolder />}
      <Form
        dateError={dateError}
        timeError={timeError}
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
