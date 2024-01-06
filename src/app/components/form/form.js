"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Button from "./form_components/button";
import FieldsHolderWrapper from "./form_components/fields_holder_wrapper";
import LocationHolder from "./form_components/location_holder";
import { currentDate, futureDate } from "@/app/utils/constants";

export default function Form() {
  const [pickupDate, setPickupDate] = useState({
    date: dayjs(currentDate, "DD/MM/YY"),
    dateString: dayjs().format("DD/MM/YY").toString(),
  });
  const [dropoffDate, setDropoffDate] = useState({
    date: dayjs(futureDate, "DD/MM/YY"),
    dateString: dayjs().add(1, "day").format("DD/MM/YY").toString(),
  });
  const [pickupTime, setPickupTime] = useState({
    time: dayjs("2023-02-06T09:38"),
    timeString: dayjs("2023-02-06T09:38").format("HH:mm a"),
  });
  const [dropoffTime, setDropoffTime] = useState({
    time: dayjs("2023-02-06T09:38"),
    timeString: dayjs("2023-02-06T09:38").format("HH:mm a"),
  });
  const [minDate, setMinDate] = useState(null);
  const [disablePastPickupTime, setDisablePastPickupTime] = useState(false);

  // console.log(dayjs(new Date(Date.now() + 7200000))
  //     .format("HH:mm a")
  //     .toString())

  const router = useRouter();

  // set minimum date for dropoff date
  useEffect(() => {
    setMinDate(pickupDate.date.add(1, "day"));
  }, [pickupDate.date]);

  // disable pickup time to be able to be set in the past
  useEffect(() => {
    if (
      pickupDate.date.format("DD/MM/YY").toString() ==
      dayjs().format("DD/MM/YY")
    ) {
      setDisablePastPickupTime(true);
    } else {
      setDisablePastPickupTime(false);
    }
  }, [pickupDate.date]);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if all values are present
    if (
      !pickupDate.dateString ||
      !dropoffDate.dateString ||
      !pickupTime.timeString ||
      !dropoffTime.timeString
    ) {
      return;
    }

    // check if pick up date is today but pick time is set in the past
    // let newPickupTime = "";
    // if (pickupDate.dateString === dayjs().format("DD/MM/YY")) {
    // }

    const link = `/cars?pickupDate=${pickupDate.dateString}&dropoffDate=${dropoffDate.dateString}&pickupTime=${pickupTime.time}&dropoffTime=${dropoffTime.time}`;
    router.push(link);
  };

  const handlePickupDateChange = (date) => {
    setPickupDate({ date, dateString: date.format("DD/MM/YY").toString() });
  };

  const handleDropoffDateChange = (date) => {
    setDropoffDate({ date, dateString: date.format("DD/MM/YY") });
  };

  const handlePickupTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      setPickupTime({
        time,
        timeString: time.format("HH:mm a").toString(),
      });
    }
  };

  const handleDropoffTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      setDropoffTime({
        time,
        timeString: time.format("HH:mm a").toString(),
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-5"
    >
      <LocationHolder />
      <FieldsHolderWrapper
        pickupDate={pickupDate.date}
        dropoffDate={dropoffDate.date}
        pickupTime={pickupTime.time}
        dropoffTime={dropoffTime.time}
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
