"use client";

import Error from "../checkout/components/error/error";
import Header from "./components/header";
import DetailsHolder from "./components/details_holder";

export default function PageContent({ trip }) {
  if (!trip) {
    return (
      <div className="w-full">
        <Error />
      </div>
    );
  }

  return (
    <div className="w-full h-[355px] px-3 py-5 flex flex-col items-center justify-start gap-5 md:px-20">
      <Header />
      <DetailsHolder tripId={trip._id} />
    </div>
  );
}
