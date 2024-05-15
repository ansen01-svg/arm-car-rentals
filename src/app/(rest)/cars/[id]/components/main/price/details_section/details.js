import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Button from "./button";
import Header from "./header";
import PriceBreakup from "./price_breakup";
import Total from "./total";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";
import getDate from "@/app/_lib/frontend/getDate";

export default function PriceDetails(props) {
  const { token, car, dates, time, disableBtn, setDisableBtn } = props;

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const date1 = getDate(dates.pickupDate);
  const date2 = getDate(dates.dropoffDate);
  const days = calculateDaysBetweenDates(date2, date1);
  const tax = 0;
  const fees = 0;
  const discount = 0;
  const totalCost = parseInt(car.rate) * parseInt(days) + tax + fees;

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
      rate: car.rate,
      days,
      tax,
      fees,
      discount,
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
        return;
      }

      const data = await response.json();
      router.push(`/checkout?tripId=${data.data}`);
      setDisableBtn(false);
    } catch (error) {
      setDisableBtn(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 bg-white rounded shadow lg:px-6 lg:py-6">
      <Header />
      <PriceBreakup price={car.rate} days={days} totalCost={totalCost} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Total totalCost={totalCost} />
      <Button
        handleReserveBtnClick={handleReserveBtnClick}
        disableBtn={disableBtn}
      />
    </div>
  );
}
