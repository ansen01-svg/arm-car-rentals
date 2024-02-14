import PageContent from "./page_content";
import fetchCars from "@/app/_lib/frontend/fetchCars";

export default async function Cars({ searchParams }) {
  const cars = await fetchCars();

  return (
    <div className="max-w-full bg-primary">
      <PageContent searchParams={searchParams} cars={cars} />
    </div>
  );
}
