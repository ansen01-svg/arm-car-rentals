import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchAllTrips from "@/app/_lib/frontend/fetchAllTrips";

export const metadata = {
  title: "ARM: Trips",
};

export default async function Trips() {
  const token = cookies().get("token")?.value || "";
  const trips = await fetchAllTrips(token);

  return (
    <div className="max-w-full">
      <PageContent trips={trips} />
    </div>
  );
}
