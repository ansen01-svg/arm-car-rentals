import { cookies } from "next/headers";
import PageContent from "./page_content";
import fetchAllTrips from "@/app/_lib/frontend/fetchAllTrips";

export const metadata = {
  title: "My Trips | Carko.in",
  description:
    "View and manage your upcoming and past trips with Carko.in. Access booking details, make changes, and enjoy a seamless travel experience. Manage your trips now!",
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
