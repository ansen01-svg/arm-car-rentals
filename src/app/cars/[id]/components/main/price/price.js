import PriceDetails from "./details_section/details";
import PriceDisplay from "./price_display/price_display";

export default function PriceSection(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 lg:w-[calc(100%-65%-32px)]">
      <PriceDisplay />
      <PriceDetails />
    </div>
  );
}
