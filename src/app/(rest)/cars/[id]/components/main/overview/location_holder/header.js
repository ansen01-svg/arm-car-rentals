import { header } from "@/app/utils/constants";

export default function Header() {
  return (
    <div className="w-full text-primary">
      <h1 className="font-bold">{header}</h1>
    </div>
  );
}
