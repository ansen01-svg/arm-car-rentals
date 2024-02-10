import Link from "next/link";
import { useState, useEffect } from "react";

const liText1 = `You'll receive a confirmation email shortly at`;
const liText2 = "You can cancel your booking anytime.";

export default function DetailsHolder({ tripId }) {
  const [data, setData] = useState(null);

  // get data
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/trips/generate_token`, {
      method: "POST",
      headers: { "Content-Type": "application-json" },
      body: JSON.stringify({ tripId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setData(data.data);
        }
      })
      .catch((error) => console.log(error));
  }, [tripId]);

  return (
    <div className="w-full px-4 py-5 bg-white rounded flex flex-col items-center justify-center gap-6">
      <div className="w-full text-left">
        <p>
          ARM itinerary number:&nbsp;
          {data && (
            <span className="font-semibold">{data.itineraryNumber}</span>
          )}
        </p>
      </div>
      <div className="w-full px-4 text-[15px]">
        <ul className="list-disc">
          <li>
            {liText1}&nbsp;
            {data && data.email}
          </li>
          <li>{liText2}</li>
        </ul>
      </div>
      <div className="w-full flex flex-row items-center justify-start">
        <Link
          href={`/trips#${tripId}`}
          className="px-4 py-2 bg-secondary rounded text-white font-medium"
        >
          View my booking
        </Link>
      </div>
    </div>
  );
}
