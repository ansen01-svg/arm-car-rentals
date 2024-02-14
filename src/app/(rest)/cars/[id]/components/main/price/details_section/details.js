import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./button";
import Header from "./header";
import PriceBreakup from "./price_breakup";
import Total from "./total";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";
import getDate from "@/app/_lib/frontend/getDate";

export default function PriceDetails(props) {
  const { token, car, dates, time, disableBtn, setDisableBtn } = props;

  const router = useRouter();

  const date1 = getDate(dates.pickupDate);
  const date2 = getDate(dates.dropoffDate);
  const days = calculateDaysBetweenDates(date2, date1);
  const tax = 0;
  const fees = 0;
  const totalCost = parseInt(car.price) * parseInt(days) + tax + fees;

  // reserve car
  const handleReserveBtnClick = async () => {
    setDisableBtn(true);

    if (!token) {
      const currentUrl = window.location.href.split("3000")[1];
      const redirectUrl = `/signin?callbackUrl=${currentUrl}`;

      router.push(redirectUrl);
      setDisableBtn(false);
      return;
    }

    const body = {
      tripStartDate: dates.pickupDate,
      tripEndDate: dates.dropoffDate,
      pickupTime: time.pickupTime,
      dropoffTime: time.dropoffTime,
      type: car.carType,
      name: car.carName,
      capacity: car.capacity,
      specification: car.specification.toLowerCase(),
      price: car.price,
      days,
      tax,
      fees,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/trips/create_trip",
        {
          method: "POST",
          headers: { "Content-Type": "application-json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        router.push(`/checkout?tripId=${data.data}`);
        setDisableBtn(false);
      } else {
        setDisableBtn(false);
        return;
      }
    } catch (error) {
      setDisableBtn(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 bg-white rounded shadow lg:px-6 lg:py-6">
      <Header />
      <PriceBreakup price={car.price} days={days} totalCost={totalCost} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Total totalCost={totalCost} />
      <Button
        handleReserveBtnClick={handleReserveBtnClick}
        disableBtn={disableBtn}
      />
    </div>
  );
}
