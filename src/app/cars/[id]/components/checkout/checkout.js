import { useState, useEffect } from "react";
import "./checkout.css";
import getDate from "@/app/_lib/frontend/getDate";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";

export default function Checkout(props) {
  const { car, dates, time } = props;

  const [isVisible, setIsVisible] = useState(true);

  const date1 = dates.pickupDate && getDate(dates.pickupDate);
  const date2 = getDate(dates.dropoffDate);
  const days = calculateDaysBetweenDates(date2, date1).toString();
  const totalCost = (parseInt(car.price) * parseInt(days)).toString();

  // reserve car
  const handleReserveBtnClick = () => {};

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
      <DetailsHolder
        price={car.price}
        days={days && days}
        totalCost={totalCost && totalCost}
      />
      <ButtonHolder />
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

function ButtonHolder() {
  return (
    <div className="button-holder">
      <button className="button">Reserve</button>
    </div>
  );
}
