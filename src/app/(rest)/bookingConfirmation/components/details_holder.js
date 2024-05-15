import Link from "next/link";

const liText1 = `You'll receive a confirmation email shortly at`;
const liText2 = "You can cancel your booking anytime.";

export default function DetailsHolder({ trip }) {
  return (
    <div className="w-full px-4 py-5 text-primary bg-white rounded flex flex-col items-center justify-center gap-6 shadow">
      <div className="w-full text-left">
        <p>
          ARM itinerary number:&nbsp;
          {trip && (
            <span className="font-semibold">{trip.itineraryNumber}</span>
          )}
        </p>
      </div>
      <div className="w-full px-4 text-[15px]">
        <ul className="list-disc">
          <li>
            {liText1}&nbsp;
            {trip && trip.contactEmail}
          </li>
          <li>{liText2}</li>
        </ul>
      </div>
      <div className="w-full flex flex-row items-center justify-start">
        <Link
          href={`/trips#${trip._id}`}
          className="px-4 py-2 bg-secondary rounded text-white font-medium"
        >
          View my booking
        </Link>
      </div>
    </div>
  );
}
