import CarHolder from "./car_holder/car_holder";
import InfoHolder from "./info_holder/info_holder";
import LocationHolder from "./location_holder/location_holder";
import PolicyHolder from "./policy_holder/policy_holder";
import CarHolderSkeleton from "../../../skeletons/overview/car_holder_skeleton";
import InfoHolderSkeleton from "../../../skeletons/overview/info_holder_skeleton";
import CommonSkeleton from "../../../skeletons/overview/common_skeleton";

export default function OverviewSection(props) {
  const { car, dates, time } = props;

  const dataReady = dates.pickupDate;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 lg:w-[65%]">
      {dataReady ? (
        <CarHolder date={dates.pickupDate} car={car} />
      ) : (
        <CarHolderSkeleton />
      )}
      {dataReady ? (
        <InfoHolder date={dates.pickupDate} />
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
