import { ExtraTextsHolder } from "@/app/(rest)/cars/components/main/cars_holder/card/details_holder";

export default function PriceDisplay({ car }) {
  return (
    <div
      id="price-summary"
      className="w-full px-3 py-3 flex flex-col items-center justify-center gap-3 bg-white rounded lg:px-6 lg:py-6"
    >
      <div className="w-full flex flex-row items-center justify-start gap-1">
        <p className="font-bold text-[18px]">Rs {car.price}</p>
        <p className="text-primary text-xs">per day</p>
      </div>
      <ExtraTextsHolder />
    </div>
  );
}
