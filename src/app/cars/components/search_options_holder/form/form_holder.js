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
    handlePickupDateChange,
    handleDropoffDateChange,
    handlePickupTimeChange,
    handleDropoffTimeChange,
    setParams,
  } = props;

  const [fieldsError, setFieldsError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

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

    // update params array
    const newParamsArray = [
      { pickupDate: dayjs(pickupDate) },
      { dropoffDate: dayjs(dropoffDate) },
      { pickupTime: dayjs(pickupTime) },
      { dropoffTime: dayjs(dropoffTime) },
    ];
    setParams(newParamsArray);

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
