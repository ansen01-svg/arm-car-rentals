"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import useCheckFaultyAccess from "@/app/_lib/frontend/hooks/useCheckFaultyAccess";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import CarsPageSkeleton from "./components/skeleton/skeleton";

// get dropoff date
const getFromDate = (inputDate) => {
  const date = dayjs(inputDate).format("MM/DD/YY");
  return date;
};

export default function PageContent(props) {
  const { searchParams } = props;

  const [cars, setCars] = useState(null);

  const date = getFromDate(searchParams.dropoffDate);

  // fetch cars
  const fetchCars = (date) => {
    setCars(null);

    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/getAllCars?from=${date}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setCars(data.data);
        } else {
          console.log(data);
          setCars([]);
        }
      })
      .catch((err) => console.log(err));
  };

  // fetch cars on load
  useEffect(() => {
    fetchCars(date);

    return () => setCars(null);
  }, []);

  const { faultyAccess } = useCheckFaultyAccess(searchParams);

  if (faultyAccess) {
    return (
      <div className="w-full">
        <SearchOptionsHolder fetchCars={fetchCars} />
        <ErrorMessageHolder />
      </div>
    );
  }

  if (!cars) {
    return (
      <div className="w-full min-h-[calc(100vh-56px-224px)] md:min-h-[calc(100vh-64px-224px)]">
        <SearchOptionsHolder fetchCars={fetchCars} />
        <CarsPageSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-56px-224px)] md:min-h-[calc(100vh-64px-224px)]">
      <SearchOptionsHolder fetchCars={fetchCars} />
      <Body cars={cars} />
    </div>
  );
}
