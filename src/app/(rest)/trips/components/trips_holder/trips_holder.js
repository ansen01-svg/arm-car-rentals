import TripCard from "../trip_card/trip_card";

export default function TripsHolder(props) {
  const { trips, setCancelId, handleClickOpen } = props;

  return (
    <div className="w-full md:w-[60vw] md:px-3 md:py-5 lg:w-[40vw]">
      <div className="w-full px-3 py-5 flex flex-col items-center justify-center gap-3 bg-primary">
        {trips &&
          trips.map((trip) => {
            return (
              <TripCard
                key={trip._id}
                trip={trip}
                setCancelId={setCancelId}
                handleClickOpen={handleClickOpen}
              />
            );
          })}
      </div>
    </div>
  );
}
