"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";

export default function CarsPage({ searchParams, cars }) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);
  const [minDate, setMinDate] = useState(null);

  // check if params are ok
  const isInvalidDate = searchParams
    ? dayjs(searchParams.dropoffTime).format("HH:mm a") === "Invalid Date"
    : true;

  // set search params to state
  useEffect(() => {
    if (Object.keys(searchParams).length !== 0) {
      const { pickupDate, dropoffDate, pickupTime, dropoffTime } = searchParams;

      setPickupDate(dayjs(pickupDate));
      setDropoffDate(dayjs(dropoffDate));
      setPickupTime(dayjs(pickupTime));
      setDropoffTime(dayjs(dropoffTime));
    }
  }, [searchParams]);

  // set minimum date for dropoff date
  useEffect(() => {
    if (pickupDate) {
      setMinDate(pickupDate.add(1, "day"));
    }
  }, [pickupDate]);

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
    <div className="w-full">
      <SearchOptionsHolder
        pickupDate={pickupDate}
        dropoffDate={dropoffDate}
        pickupTime={pickupTime}
        dropoffTime={dropoffTime}
        minDate={minDate}
        handlePickupDateChange={handlePickupDateChange}
        handleDropoffDateChange={handleDropoffDateChange}
        handlePickupTimeChange={handlePickupTimeChange}
        handleDropoffTimeChange={handleDropoffTimeChange}
      />
      {isInvalidDate ? (
        <ErrorMessageHolder />
      ) : (
        <Body showFilterModal={showFilterModal} />
      )}
    </div>
  );
}
