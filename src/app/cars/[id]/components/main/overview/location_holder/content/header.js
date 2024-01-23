import { subHeader } from "@/app/utils/constants";

export default function Header() {
  return (
    <div className="w-full">
      <p className="font-bold text-[14px]">{subHeader}</p>
    </div>
  );
}
