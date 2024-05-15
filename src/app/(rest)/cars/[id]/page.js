import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchSingleCar from "@/app/_lib/global/fetch_single_car";

export const generateMetadata = async ({ params }) => {
  const car = await fetchSingleCar(params.id);

  return {
    title: car.length ? `Details for ${car[0].model}` : "ARM: Error",
  };
};

export default async function SingleCar({ params, searchParams }) {
  const token = cookies().get("token")?.value || "";
  const car = await fetchSingleCar(params.id);

  return (
    <div className="max-w-full bg-primary">
      <PageContent searchParams={searchParams} token={token} car={car} />
    </div>
  );
}
