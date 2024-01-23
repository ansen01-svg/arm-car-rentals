"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export default function Content() {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(window.location.href.split("?")[1]);
  }, []);

  return (
    <Link href={`/cars?${link}`}>
      <div className="flex flex-row items-center justify-start gap-3 text-primary font-medium">
        <span>
          <ArrowBackOutlinedIcon />
        </span>
        <p>See all cars</p>
      </div>
    </Link>
  );
}
