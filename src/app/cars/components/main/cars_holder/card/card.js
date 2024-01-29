import { useState, useEffect } from "react";
import Link from "next/link";
import CardContent from "./card_content";
import CarCardContentSkeleton from "@/app/cars/skeletons/car_card_content_skeleton";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function Card(props) {
  const { car, dataReady } = props;
  const { mobileScreen } = useWindowWidth();

  const [details, setDetails] = useState("");

  useEffect(() => {
    const details = window.location.href.split("?")[1];
    setDetails(details);
  }, []);

  return (
    <div className="w-full px-1 py-1 bg-white rounded shadow relative md:h-56">
      {dataReady ? <CardContent car={car} /> : <CarCardContentSkeleton />}
      {dataReady && mobileScreen && (
        <Link
          href={`/cars/${car._id}?${details}`}
          className="w-full h-full top-0 left-0 absolute z-50"
        ></Link>
      )}
    </div>
  );
}
