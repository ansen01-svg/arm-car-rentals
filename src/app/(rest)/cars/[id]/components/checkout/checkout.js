import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./checkout.css";
import getDate from "@/app/_lib/frontend/getDate";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";

export default function Checkout(props) {
  const { token, car, dates, time } = props;

  const [isVisible, setIsVisible] = useState(true);
  const [disableBtn, setDisableBtn] = useState(false);

  const router = useRouter();

  const date1 = dates.pickupDate && getDate(dates.pickupDate);
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
      console.log(error);
      setDisableBtn(false);
    }
  };

  // adjust scroll position
  const handleScroll = () => {
    const scrolledFromTop = window.scrollY;

    if (scrolledFromTop > 300) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-button-wrapper ${isVisible ? "show" : "hidden"}`}>
      <DetailsHolder price={car.price} days={days} totalCost={totalCost} />
      <ButtonHolder
        handleReserveBtnClick={handleReserveBtnClick}
        disableBtn={disableBtn}
      />
    </div>
  );
}

function DetailsHolder(props) {
  const { price, days, totalCost } = props;

  return (
    <div className="details-holder">
      {price && (
        <p style={{ fontSize: "12px", color: "#666" }}>Rs.{price} per day</p>
      )}
      {totalCost && (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          Rs.{totalCost}&nbsp;
          <span
            style={{ fontSize: "12px", color: "#666", fontWeight: "normal" }}
          >
            total
          </span>
        </p>
      )}
      {days && (
        <p style={{ fontSize: "12px", color: "#666" }}>
          Car rental fee x {days} days
        </p>
      )}
    </div>
  );
}

function ButtonHolder(props) {
  const { handleReserveBtnClick, disableBtn } = props;

  return (
    <div className="button-holder">
      <button
        className="button"
        disabled={disableBtn}
        onClick={handleReserveBtnClick}
      >
        Reserve
      </button>
    </div>
  );
}
