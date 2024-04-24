import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import "./checkout.css";
import getDate from "@/app/_lib/frontend/getDate";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";

export default function Checkout(props) {
  const { token, car, dates, time, disableBtn, setDisableBtn } = props;

  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

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
      const params = new URLSearchParams(searchParams).toString();
      const redirectUrl = `/signin?callbackUrl=${path}?${params}`;

      router.push(redirectUrl);
      setDisableBtn(false);
      return;
    }

    const body = {
      tripStartDate: dates.pickupDate,
      tripEndDate: dates.dropoffDate,
      pickupTime: time.pickupTime,
      dropoffTime: time.dropoffTime,
      carId: car._id,
      price: car.price,
      days,
      tax,
      fees,
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
