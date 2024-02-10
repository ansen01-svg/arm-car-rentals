import CardHeader from "./card_header";
import Main from "./main";

export default function TripCard(props) {
  const { trip, setCancelId, handleClickOpen } = props;

  const cancelBooking = () => {
    handleClickOpen();
    setCancelId(trip._id);
  };

  return (
    <div
      id={trip._id}
      className="w-full px-3 py-4 flex flex-col items-center justify-center gap-3 bg-white relative"
    >
      <CardHeader status={trip.status} cancelBooking={cancelBooking} />
      <Main trip={trip} />
    </div>
  );
}
