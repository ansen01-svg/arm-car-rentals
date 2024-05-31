import { subHeader } from "@/app/utils/constants";

export default function Header() {
  return (
    <div className="w-full">
      <h2 className="font-bold text-[14px]">{subHeader}</h2>
    </div>
  );
}
