"use client";

import { useEffect, useState } from "react";
import sanityClient from "@/sanity/sanity_client";
import dayjs from "dayjs";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";

export default function Cars({ searchParams }) {
  const [cars, setCars] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);

  const isInvalidDate = searchParams
    ? dayjs(searchParams.dropoffTime).format("HH:mm a") === "Invalid Date"
    : true;

  // set search params to state
  useEffect(() => {
    if (Object.keys(searchParams).length !== 0) {
      const { pickupDate, dropoffDate, pickupTime, dropoffTime } = searchParams;

      setPickupDate(pickupDate);
      setDropoffDate(dropoffDate);
      setPickupTime(dayjs(pickupTime).format("HH:mm a").toString());
      setDropoffTime(dayjs(dropoffTime).format("HH:mm a").toString());
    }
  }, [searchParams]);

  // fetch cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars = await sanityClient.fetch(`*[_type == "car"]`);
        if (cars) {
          setCars(cars);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="w-full">
      <SearchOptionsHolder />
      {isInvalidDate ? (
        <ErrorMessageHolder />
      ) : (
        <Body showFilterModal={showFilterModal} />
      )}
    </div>
  );
}
