import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchTrip from "@/app/_lib/frontend/fetchTrip";
import revalidateAction from "@/app/actions/revalidate";

export const generateMetadata = async ({ searchParams }) => {
  const trip = await fetchTrip(searchParams.tripId);

  return {
    title: trip ? "Booking Confirmation | Carko.in" : "Carko.in: Not Found",
    description:
      "Your car rental booking is confirmed! View your booking details and receive important information about your rental. Thank you for choosing Carko.in.",
  };
};

// confirm trip and update trip status
const confirmTrip = async (tripId, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/confirmBooking`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tripId, token }),
      }
    );

    if (response.status === 404 || response.status === 500) {
      return { message: "error" };
    } else if (response.status === 409) {
      return { message: "duplicate" };
    } else if (response.status === 400) {
      return { message: "unavailable" };
    } else if (response.status === 201) {
      const data = await response.json();
      return data.data;
    }

    return { message: "unknown" };
  } catch (error) {
    console.error(error);
    return { message: "error" };
  }
};

export default async function Bookingconfirmation({ searchParams }) {
  // revalidate current path to bring in fresh trip data with itinerary number and other details
  await revalidateAction(`/bookingConfirmation?tripId=${searchParams.tripId}`);

  const token = cookies().get("token")?.value || "";

  // update current trip status
  const data = await confirmTrip(searchParams.tripId, token);

  // revalidate pages
  await revalidateAction("/trips");
  await revalidateAction("/bookings");
  await revalidateAction("/users");
  await revalidateAction("/fleet");

  return (
    <div className="max-w-full bg-primary">
      <PageContent data={data} />
    </div>
  );
}
