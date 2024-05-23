import { address } from "@/app/utils/constants";

export default function LocationHolder() {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-[2px] px-3 py-1 border-[1px] border-slate-300 rounded-lg">
      <p className="text-xs">Pick-up and drop-off</p>
      <p className="text-[15px]">{address}</p>
    </div>
  );
}
