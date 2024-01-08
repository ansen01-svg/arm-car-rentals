"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Button from "./form_components/button";
import FieldsHolderWrapper from "./form_components/fields_holder_wrapper";
import LocationHolder from "./form_components/location_holder";
import { currentDate, futureDate } from "@/app/utils/constants";

export default function Form() {
  const [pickupDate, setPickupDate] = useState(dayjs(currentDate, "DD/MM/YY"));
  const [dropoffDate, setDropoffDate] = useState(dayjs(futureDate, "DD/MM/YY"));
  const [pickupTime, setPickupTime] = useState(dayjs("2023-02-06T09:38"));
  const [dropoffTime, setDropoffTime] = useState(dayjs("2023-02-06T09:38"));
  const [minDate, setMinDate] = useState(null);
  const [disablePastPickupTime, setDisablePastPickupTime] = useState(false);

  // console.log(dayjs(new Date(Date.now() + 7200000))
  //     .format("HH:mm a")
  //     .toString())

  const router = useRouter();

  // set minimum date for dropoff date
  useEffect(() => {
    setMinDate(pickupDate.add(1, "day"));
  }, [pickupDate]);

  // disable pickup time to be able to be set in the past
  useEffect(() => {
    if (
      pickupDate.format("DD/MM/YY").toString() == dayjs().format("DD/MM/YY")
    ) {
      setDisablePastPickupTime(true);
    } else {
      setDisablePastPickupTime(false);
    }
  }, [pickupDate]);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if all values are present
    if (!pickupDate || !dropoffDate || !pickupTime || !dropoffTime) {
      return;
    }

    // check if pick up date is today but pick time is set in the past
    // let newPickupTime = "";
    // if (pickupDate.dateString === dayjs().format("DD/MM/YY")) {
    // }

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
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-5"
    >
      <LocationHolder />
      <FieldsHolderWrapper
        pickupDate={pickupDate}
        dropoffDate={dropoffDate}
        pickupTime={pickupTime}
        dropoffTime={dropoffTime}
        minDate={minDate}
        disablePastPickupTime={disablePastPickupTime}
        handlePickupDateChange={handlePickupDateChange}
        handleDropoffDateChange={handleDropoffDateChange}
        handlePickupTimeChange={handlePickupTimeChange}
        handleDropoffTimeChange={handleDropoffTimeChange}
      />
      <Button />
    </form>
  );
}
