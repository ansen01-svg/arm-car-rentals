"use client";

import "./style.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "./components/error/error";
import Header from "./components/header/header";
import Links from "./components/links/links";
import Main from "./components/main/main";
import Checkout from "./components/checkout/checkout";
import useCheckFaultyAccess from "@/app/_lib/frontend/hooks/useCheckFaultyAccess";
import getDate from "@/app/_lib/frontend/getDate";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";
import faultyDateAndTime from "@/app/_lib/frontend/faultyDateAndTime";

export default function PageContent(props) {
  const { searchParams, token, car } = props;

  const [dates, setDates] = useState({ pickupDate: "", dropoffDate: "" });
  const [time, setTime] = useState({ pickupTime: "", dropoffTime: "" });
  const [disableBtn, setDisableBtn] = useState(false);

  // loading animation
  const [inProcess, setInProcess] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const router = useRouter();
  const path = usePathname();
  const searchParams1 = useSearchParams();

  const pickupDate = searchParams.pickupDate;
  const dropoffDate = searchParams.dropoffDate;
  const pickupTime = searchParams.pickupTime;

  const mobileScreen = useMediaQuery("(max-width:1024px)");
  const { faultyAccess } = useCheckFaultyAccess(searchParams);
  const isFaultyPickupTiming = faultyDateAndTime(pickupTime, pickupDate);

  const dataReady = dates.pickupDate;

  const date1 = getDate(dates.pickupDate);
  const date2 = getDate(dates.dropoffDate);
  const days = calculateDaysBetweenDates(date2, date1);
  const tax = 0;
  const fees = 0;

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

  // apply animation
  useEffect(() => {
    if (inProcess) {
      setAnimationClass("slide-in");
    } else {
      setAnimationClass("slide-out");
    }
  }, [inProcess]);

  // reserve car
  const handleReserveBtnClick = async () => {
    setDisableBtn(true);
    setInProcess(true);

    if (!token) {
      const params = new URLSearchParams(searchParams1).toString();
      const redirectUrl = `/signin?callbackUrl=${path}?${params}`;

      router.push(redirectUrl);
      setDisableBtn(false);
      setInProcess(false);
      return;
    }

    const body = {
      tripStartDate: dates.pickupDate,
      tripEndDate: dates.dropoffDate,
      pickupTime: time.pickupTime,
      dropoffTime: time.dropoffTime,
      carId: car[0]._id,
      rate: car[0].rate,
      days,
      tax,
      fees,
      discount: 0,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/createBooking`,
        {
          method: "POST",
          headers: { "Content-Type": "application-json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        console.log(data);
        setDisableBtn(false);
        setInProcess(false);
        return;
      }

      const data = await response.json();
      router.push(`/checkout?tripId=${data.data}`);
    } catch (error) {
      console.log(error);
    } finally {
      setDisableBtn(false);
      setInProcess(false);
    }
  };

  if (
    faultyAccess ||
    // isFaultyPickupTiming ||
    // new Date(pickupDate) >= new Date(dropoffDate) ||
    car.length < 1
  ) {
    return (
      <div className="w-full">
        <Error />
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Header searchParams={searchParams} />
      <Links />
      <Main
        car={car[0]}
        dates={dates}
        time={time}
        disableBtn={disableBtn}
        handleReserveBtnClick={handleReserveBtnClick}
      />
      {mobileScreen && dataReady && (
        <Checkout
          car={car[0]}
          dates={dates}
          time={time}
          disableBtn={disableBtn}
          handleReserveBtnClick={handleReserveBtnClick}
        />
      )}
      {inProcess && <InProgress animationClass={animationClass} />}
    </div>
  );
}

function InProgress({ animationClass }) {
  return (
    <div
      className={`px-2 py-2 bg-white flex items-center justify-center rounded-full fixed bottom-[0] left-[calc(50%-25.5px)] translate-x-[calc(50%-25.5px)] shadow-xl ${animationClass}`}
    >
      <CircularProgress size={35} thickness={6} />
    </div>
  );
}
