import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchTrip from "@/app/_lib/frontend/fetchTrip";
import revalidateAction from "@/app/actions/revalidate";

export const generateMetadata = async ({ searchParams }) => {
  const trip = await fetchTrip(searchParams.tripId);

  return {
    title: trip ? "ARM: Confirmation" : "ARM: Not Found",
  };
};

// confirm trip and update trip status
const confirmTrip = async (tripId, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/confirmBooking`,
      {
        method: "POST",
        headers: { "Content-Type": "application-json" },
        body: JSON.stringify({ tripId, token }),
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default async function Bookingconfirmation({ searchParams }) {
  // revalidate current path to bring in fresh trip data with itinerary number and other details
  revalidateAction(`/bookingConfirmation?tripId=${searchParams.tripId}`);

  const trip = await fetchTrip(searchParams.tripId);
  const token = cookies().get("token")?.value || "";

  // update current trip status
  await confirmTrip(searchParams.tripId, token);

  // revalidate trips page because a new trip is added
  revalidateAction("/trips");

  return (
    <div className="max-w-full bg-primary">
      <PageContent trip={trip} />
    </div>
  );
}
