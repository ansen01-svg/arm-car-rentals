"use client";

import Link from "next/link";

const errorMsg1 = "Page not found.";
const errorMsg2 =
  "We apologize, but we cannot find the page you’re looking for.";
const errorMsg3 = "your search again.";

export default function Error() {
  return (
    <div className="w-full h-[355px] px-3 flex flex-col items-center justify-center gap-2">
      <p className="font-bold">{errorMsg1}</p>
      <p className="text-primary text-[14px]">{errorMsg2}</p>
      <p className="text-primary text-[14px]">
        <Link href={"/"} className="text-orange-500 underline text-[14px]">
          Restart
        </Link>
        &nbsp;
        {errorMsg3}
      </p>
    </div>
  );
}
