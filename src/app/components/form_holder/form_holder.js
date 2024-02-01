"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Form from "../form/form";
import ErrorMsgHolder from "../error_msg/error_msg_holder";
import FormHeader from "../form_header/form_header";
import { defaultPickupDate, defaultDropoffDate } from "@/app/utils/constants";
import getDate from "@/app/_lib/frontend/getDate";
import getMilliseconds from "@/app/_lib/frontend/getMilliseconds";

export default function FormHoler() {
  const [pickupDate, setPickupDate] = useState(
    dayjs(defaultPickupDate, "DD/MM/YY")
  );
  const [dropoffDate, setDropoffDate] = useState(
    dayjs(defaultDropoffDate, "DD/MM/YY")
  );
  const [pickupTime, setPickupTime] = useState(dayjs("2023-02-06T09:38"));
  const [dropoffTime, setDropoffTime] = useState(dayjs("2023-02-06T09:38"));
  const [minDate, setMinDate] = useState(null);

  const [fieldsError, setFieldsError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  const router = useRouter();

  // set minimum date for dropoff date
  useEffect(() => {
    setMinDate(pickupDate.add(1, "day"));
  }, [pickupDate]);

  // handle form submit
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

    if (pickupDate.format("DD/MM/YY") === dayjs().format("DD/MM/YY")) {
      // check if pick up date is today but pick time is set in the past
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

    const link = `/cars?pickupDate=${pickupDate}&dropoffDate=${dropoffDate}&pickupTime=${pickupTime}&dropoffTime=${dropoffTime}`;
    router.push(link);
  };

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleDropoffDateChange = (date) => {
    setDropoffDate(date);
  };

  const handlePickupTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      setPickupTime(time);
    }
  };

  const handleDropoffTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      setDropoffTime(time);
    }
  };

  return (
    <div className="w-full h-full px-6 py-10 flex flex-col gap-5 bg-white relative z-30 md:rounded">
      <FormHeader />
      {fieldsError && <ErrorMsgHolder />}
      <Form
        setFieldsError={setFieldsError}
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
