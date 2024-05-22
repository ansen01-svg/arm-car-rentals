import { useState, useEffect } from "react";
import "./checkout.css";
import getDate from "@/app/_lib/frontend/getDate";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";

export default function Checkout(props) {
  const { car, dates, disableBtn, handleReserveBtnClick } = props;

  const [isVisible, setIsVisible] = useState(true);

  const date1 = getDate(dates.pickupDate);
  const date2 = getDate(dates.dropoffDate);
  const days = calculateDaysBetweenDates(date2, date1);
  const tax = 0;
  const fees = 0;

  const totalCost = parseInt(car.rate) * parseInt(days) + tax + fees;

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
      <DetailsHolder price={car.rate} days={days} totalCost={totalCost} />
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
        <p style={{ fontSize: "12px", color: "rgba(36,39,44,.7)" }}>
          Rs.{price} per day
        </p>
      )}
      {totalCost && (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          Rs.{totalCost}&nbsp;
          <span
            style={{
              fontSize: "12px",
              color: "rgba(36,39,44,.7)",
              fontWeight: "normal",
            }}
          >
            total
          </span>
        </p>
      )}
      {days && +days > 1 ? (
        <p style={{ fontSize: "12px", color: "rgba(36,39,44,.7)" }}>
          Car rental fee x {days} days
        </p>
      ) : (
        <p style={{ fontSize: "12px", color: "rgba(36,39,44,.7)" }}>
          Car rental fee x {days} day
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
