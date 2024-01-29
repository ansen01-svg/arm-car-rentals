import Link from "next/link";
import { errorMsg1, errorMsg2 } from "@/app/utils/constants";

export default function Error() {
  return (
    <div>
      <div className="w-full h-[355px] px-3 flex flex-col items-center justify-center gap-2">
        <p className="font-bold">{errorMsg1}</p>
        <p className="text-primary text-[14px]">
          {errorMsg2}
          <Link href={"/"} className="text-orange-500 underline text-[14px]">
            Try again
          </Link>
        </p>
      </div>
    </div>
  );
}
