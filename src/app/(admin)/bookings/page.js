import "../styles/scrollbar.css";
import Header from "../users/components/header/header";
import Main from "./components/main/main";
import fetchBookings from "@/app/_lib/frontend/fetchBookings";

export const metadata = {
  title: "Bookings | Carko.in",
  description: "Dispplaying all the bookings made in Carko.in till date.",
};

export default async function Bookings() {
  const bookings = await fetchBookings();

  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[67%]">
        <Header title={"Bookings"} />
        <Main bookings={bookings} />
      </div>
    </div>
  );
}
