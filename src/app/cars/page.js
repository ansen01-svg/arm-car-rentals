import CarsPage from "./cars_page";
import fetchCars from "../_lib/frontend/fetchCars";

export default async function Wrapper({ searchParams }) {
  const cars = await fetchCars();

  return (
    <div className="max-w-full bg-primary">
      <CarsPage searchParams={searchParams} cars={cars} />
    </div>
  );
}
