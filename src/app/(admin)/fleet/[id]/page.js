import "../../styles/scrollbar.css";
import Header from "../new/components/header/header";
import Main from "./components/main/main";
import fetchSingleCar from "@/app/_lib/global/fetch_single_car";

export const generateMetadata = async ({ params }) => {
  const car = await fetchSingleCar(params.id);

  return {
    title: car.length ? `Details for ${car[0].model}` : "ARM: Error",
  };
};

export default async function Fleet({ params }) {
  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[55%]">
        <Header title={params.id} />
        <Main id={params.id} />
      </div>
    </div>
  );
}
