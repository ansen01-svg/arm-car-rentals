"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import useCheckFaultyAccess from "@/app/_lib/frontend/hooks/useCheckFaultyAccess";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import CarsPageSkeleton from "./components/skeleton/skeleton";

export default function PageContent(props) {
  const { searchParams } = props;

  const [cars, setCars] = useState(null);

  const { faultyAccess } = useCheckFaultyAccess(searchParams);
  const pickupDate = searchParams.pickupDate;
  const dropoffDate = searchParams.dropoffDate;

  const fetchCars = (from, to) => {
    setCars(null);

    fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/getAllCars?from=${from},to=${to}`,
      { cache: "no-store" }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setCars(data.data);
        } else {
          console.error(data);
          setCars([]);
        }
      })
      .catch((error) => {
        console.error(error);
        setCars([]);
      });
  };

  // fetch cars on load
  useEffect(() => {
    const from = dayjs(pickupDate).format("MM/DD/YYYY");
    const to = dayjs(dropoffDate).format("MM/DD/YYYY");

    fetchCars(from, to);

    return () => setCars(null);
  }, [pickupDate, dropoffDate]);

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
