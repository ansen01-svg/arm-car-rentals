import PageContent from "./page_content";
import fetchTrip from "@/app/_lib/frontend/fetchTrip";

export const generateMetadata = async ({ searchParams }) => {
  const trip = await fetchTrip(searchParams.tripId);

  return {
    title: trip ? "ARM: Checkout" : "ARM: Not Found",
  };
};

export default async function CheckoutPage({ searchParams }) {
  const trip = await fetchTrip(searchParams.tripId);

  return (
    <div className="max-w-full bg-primary">
      <PageContent trip={trip} />
    </div>
  );
}
