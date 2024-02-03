import { header } from "@/app/utils/constants";

export default function Header() {
  return (
    <div className="w-full">
      <p className="font-bold">{header}</p>
    </div>
  );
}
