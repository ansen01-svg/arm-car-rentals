import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchSingleCar from "@/app/_lib/global/fetch_single_car";

export const generateMetadata = async ({ params }) => {
  const car = await fetchSingleCar(params.id);

  return {
    title: car.length
      ? "Book self driving car rental in Guwahati with Carko.in."
      : "ARM: Error",
    description: `Experience the comfort and style of the ${
      car.length ? car[0].title : "car"
    } with Carko.in. Check out features, pricing, and availability. Reserve your ${
      car.length ? car[0].title : "car"
    } rental today!`,
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
