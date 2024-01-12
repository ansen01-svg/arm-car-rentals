import sanityClient from "@/sanity/sanity_client";
import CarsPage from "./cars_page";
import { cache } from "react";

// fetch cars from sanity CMS
const fetchCars = cache(async () => {
  try {
    const cars = await sanityClient.fetch(`*[_type == "car"]`);
    if (cars) {
      return cars;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
});

export default async function Wrapper({ searchParams }) {
  const cars = await fetchCars();

  return (
    <div className="max-w-full bg-primary">
      <CarsPage searchParams={searchParams} cars={cars} />
    </div>
  );
}
