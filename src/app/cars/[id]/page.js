import Header from "./components/header/header";
import Links from "./components/links/links";
import Main from "./components/main/main";
import fetchCars from "@/app/_lib/frontend/fetchCars";

export const generateMetadata = async ({ params }) => {
  const car = await fetchCars(params.id);
  return {
    title: `Details for ${car.carName}`,
  };
};

export default async function SingleCar({ params, searchParams }) {
  const car = await fetchCars(params.id);

  return (
    <div className="max-w-full bg-primary">
      <Header searchParams={searchParams} />
      <Links />
      <Main car={car} />
    </div>
  );
}
