import { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import CardContent from "./card_content";

export default function Card(props) {
  const { car, disableBtnId, setDisableBtnId } = props;

  const [details, setDetails] = useState("");

  const mobileScreen = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    const details = window.location.href.split("?")[1];
    setDetails(details);
  }, []);

  return (
    <div className="w-full px-1 py-1 bg-white rounded-2xl border-[1px] border-slate-200 shadow relative md:h-56 md:hover:shadow-md">
      <CardContent
        car={car}
        disableBtnId={disableBtnId}
        setDisableBtnId={setDisableBtnId}
      />
      {mobileScreen && (
        <Link
          href={`/cars/${car._id}?${details}`}
          target="_blank"
          className="w-full h-full top-0 left-0 absolute z-40"
        ></Link>
      )}
    </div>
  );
}
