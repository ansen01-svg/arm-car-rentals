"use client";

import Link from "next/link";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { useMediaQuery } from "@mui/material";

export default function Links() {
  const mobileScreen = useMediaQuery("(max-width:1024px)");

  const tripsLinkContent = mobileScreen ? (
    <LuggageOutlinedIcon fontSize="small" />
  ) : (
    <p className="text-primary text-sm">Trips</p>
  );

  return (
    <div className="flex justify-center items-center gap-5 text-primary">
      <Link href={"/trips"}>{tripsLinkContent}</Link>
    </div>
  );
}
