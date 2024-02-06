import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchCars from "@/app/_lib/frontend/fetchCars";

export const generateMetadata = async ({ params }) => {
  const car = await fetchCars(params.id);

  return {
    title: car ? `Details for ${car.carName}` : "ARM: Error",
  };
};

export default async function SingleCar({ params, searchParams }) {
  const token = cookies().get("token")?.value || "";
  const car = await fetchCars(params.id);

  return (
    <div className="max-w-full bg-primary">
      <PageContent searchParams={searchParams} token={token} car={car} />
    </div>
  );
}
