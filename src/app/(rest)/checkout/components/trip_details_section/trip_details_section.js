import CarDetails from "./car_details";
import Price from "./price";
import Total from "./total";

export default function TripDetailsSection({ trip }) {
  const {
    totalCost: { total },
  } = trip;

  return (
    <div className="w-full px-3 py-5 flex flex-col items-center justify-center gap-3 bg-white rounded shadow md:w-[calc(35%-20px)]">
      <CarDetails trip={trip} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Price total={total} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Total total={total} />
    </div>
  );
}
