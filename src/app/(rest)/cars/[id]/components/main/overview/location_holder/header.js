import { header } from "@/app/utils/constants";

export default function Header() {
  return (
    <div className="w-full text-primary">
      <p className="font-bold">{header}</p>
    </div>
  );
}
