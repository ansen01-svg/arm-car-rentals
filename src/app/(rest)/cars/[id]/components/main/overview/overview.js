import CarHolder from "./car_holder/car_holder";
import InfoHolder from "@/app/components/cancellation_info_holder/info_holder";
import LocationHolder from "./location_holder/location_holder";
import PolicyHolder from "./policy_holder/policy_holder";
import CarHolderSkeleton from "../../../skeletons/overview/car_holder_skeleton";
import InfoHolderSkeleton from "../../../skeletons/overview/info_holder_skeleton";
import CommonSkeleton from "../../../skeletons/overview/common_skeleton";

const title1 = "Free cancellation";
const title2 =
  "Lock in this price today, cancel free of charge anytime. Reserve now and pay at pick-up.";

export default function OverviewSection(props) {
  const { car, dates, time } = props;

  const dataReady = dates.pickupDate;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 lg:w-[65%]">
      {dataReady ? <CarHolder car={car} /> : <CarHolderSkeleton />}
      {dataReady ? (
        <InfoHolder title1={title1} title2={title2} />
      ) : (
        <InfoHolderSkeleton />
      )}
      {dataReady ? (
        <LocationHolder dates={dates} time={time} />
      ) : (
        <CommonSkeleton />
      )}
      {dataReady ? <PolicyHolder /> : <CommonSkeleton />}
    </div>
  );
}
