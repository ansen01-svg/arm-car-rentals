import "../styles/scrollbar.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import fetchCars from "@/app/_lib/frontend/fetch_admin_cars";

export const metadata = {
  title: "Fleet",
};

export default async function Fleet() {
  const cars = await fetchCars();

  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[67%]">
        <Header />
        <Main cars={cars} />
      </div>
    </div>
  );
}
