"use client";

import Link from "next/link";

export default function Error(props) {
  const { errorMsg1, errorMsg2, errorMsg3, link, linkTitle } = props;

  return (
    <div className="w-full h-[355px] px-3 flex flex-col items-center justify-center gap-2">
      <p className="font-bold text-center">{errorMsg1}</p>
      <p className="text-primary text-[14px] text-center">{errorMsg2}</p>
      <p className="text-primary text-[14px] text-center">
        <Link href={link} className="text-orange-500 underline text-[14px]">
          {linkTitle}
        </Link>
        &nbsp;
        {errorMsg3}
      </p>
    </div>
  );
}
