"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useMediaQuery } from "@mui/material";
import Error from "./components/error/error";
import Header from "./components/header/header";
import Links from "./components/links/links";
import Main from "./components/main/main";
import Checkout from "./components/checkout/checkout";
import useCheckFaultyAccess from "@/app/_lib/frontend/hooks/useCheckFaultyAccess";

export default function PageContent(props) {
  const { searchParams, token, car } = props;

  const [dates, setDates] = useState({ pickupDate: "", dropoffDate: "" });
  const [time, setTime] = useState({ pickupTime: "", dropoffTime: "" });

  const mobileScreen = useMediaQuery("(max-width:1024px)");
  const { faultyAccess } = useCheckFaultyAccess(searchParams);

  const dataReady = dates.pickupDate;

  // store searchParams to session storage
  useEffect(() => {
    const params = sessionStorage.getItem("params");

    if (params) {
      sessionStorage.removeItem("params");
    }

    sessionStorage.setItem("params", JSON.stringify(searchParams));
  }, [searchParams]);

  // set dates and time to states
  useEffect(() => {
    const params = sessionStorage.getItem("params");

    if (params) {
      const storedParams = JSON.parse(sessionStorage.getItem("params"));

      const { pickupDate, dropoffDate, pickupTime, dropoffTime } = storedParams;

      setDates({
        pickupDate: dayjs(pickupDate).format("DD/MM/YY"),
        dropoffDate: dayjs(dropoffDate).format("DD/MM/YY"),
      });
      setTime({
        pickupTime: dayjs(pickupTime).format("HH:mm a"),
        dropoffTime: dayjs(dropoffTime).format("HH:mm a"),
      });
    }
  }, []);

  if (faultyAccess) {
    return (
      <div className="w-full">
        <Error />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="w-full">
        <Error />
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Header searchParams={searchParams} />
      {dataReady && <Links />}
      <Main token={token} car={car} dates={dates} time={time} />
      {mobileScreen && dataReady && (
        <Checkout token={token} car={car} dates={dates} time={time} />
      )}
    </div>
  );
}
