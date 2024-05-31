import "../../styles/scrollbar.css";
import Header from "../../fleet/new/components/header/header";
import Main from "./components/main/main";
import fetchTrip from "@/app/_lib/frontend/fetchTrip";

export const generateMetadata = async ({ params }) => {
  const booking = await fetchTrip(params.id);

  return {
    title: booking ? `Booking: ${booking._id}` : "Carko.in: Error",
    description:
      "Showing full details of the particular booking. Make changes to the status and other properties from the available fields.",
  };
};

export default async function SingleBooking({ params }) {
  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[55%]">
        <Header title={params.id} link={"/bookings"} linkTitle={"Bookings"} />
        <Main id={params.id} />
      </div>
    </div>
  );
}
