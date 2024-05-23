import CarDetails from "./car_details";
import Price from "./price";
import Total from "./total";

export default function TripDetailsSection({ trip }) {
  return (
    <div className="w-full px-3 py-5 flex flex-col items-center justify-center gap-3 bg-white rounded-2xl border-[1px] border-slate-200 shadow md:w-[calc(35%-20px)]">
      <CarDetails trip={trip} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Price total={trip.total} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Total total={trip.total} />
    </div>
  );
}
