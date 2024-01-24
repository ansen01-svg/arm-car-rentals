import CarHolder from "./car_holder/car_holder";
import InfoHolder from "./info_holder/info_holder";
import LocationHolder from "./location_holder/location_holder";
import PolicyHolder from "./policy_holder/policy_holder";

export default function OverviewSection({ car }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 lg:w-[65%]">
      <CarHolder car={car} />
      <InfoHolder />
      <LocationHolder />
      <PolicyHolder />
    </div>
  );
}
