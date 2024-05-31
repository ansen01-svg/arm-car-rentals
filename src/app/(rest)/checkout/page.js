import PageContent from "./page_content";
import fetchTrip from "@/app/_lib/frontend/fetchTrip";

export const generateMetadata = async ({ searchParams }) => {
  const trip = await fetchTrip(searchParams.tripId);

  return {
    title: trip
      ? "Secure Car Purchase Checkout | Carko.in"
      : "Carko.in: Not Found",
    description:
      "Finalize your booking securely with Carko.in. Review your order, enter your payment details, and complete your transaction with confidence. Checkout now!",
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
