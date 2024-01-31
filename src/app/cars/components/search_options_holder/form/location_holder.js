import { address } from "@/app/utils/constants";

export default function LocationHolder() {
  return (
    <div className="w-full lg:w-[27%]">
      <div className="w-full h-14 flex flex-col content-center items-start gap-2 px-4 py-1 border-[1px] border-slate-300 rounded">
        <p className="text-xs">Pick-up and drop-off</p>
        <p className="text-[15px]">{address}</p>
      </div>
    </div>
  );
}
