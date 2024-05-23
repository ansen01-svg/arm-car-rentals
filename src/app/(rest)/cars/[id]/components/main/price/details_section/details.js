import Button from "./button";
import Header from "./header";
import PriceBreakup from "./price_breakup";
import Total from "./total";
import calculateDaysBetweenDates from "@/app/_lib/frontend/getDays";
import getDate from "@/app/_lib/frontend/getDate";

export default function PriceDetails(props) {
  const { car, dates, disableBtn, handleReserveBtnClick } = props;

  const date1 = getDate(dates.pickupDate);
  const date2 = getDate(dates.dropoffDate);
  const days = calculateDaysBetweenDates(date2, date1);
  const tax = 0;
  const fees = 0;
  const totalCost = parseInt(car.rate) * parseInt(days) + tax + fees;

  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 border-[1px] border-slate-200 bg-white rounded-2xl shadow lg:px-6 lg:py-6">
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
