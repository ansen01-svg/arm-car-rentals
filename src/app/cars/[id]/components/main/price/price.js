import PriceDetails from "./details_section/details";
import PriceDisplay from "./price_display/price_display";
import PriceDisplaySkeleton from "../../../skeletons/price/price_display_skeleton";
import PriceSectionSkeleton from "../../../skeletons/price/details_section_skeleton";

export default function PriceSection(props) {
  const { car, dates, time } = props;

  const dataReady = dates.pickupDate;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 lg:w-[calc(100%-65%-32px)]">
      {dataReady ? <PriceDisplay car={car} /> : <PriceDisplaySkeleton />}
      {dataReady ? (
        <PriceDetails car={car} dates={dates} time={time} />
      ) : (
        <PriceSectionSkeleton />
      )}
    </div>
  );
}
