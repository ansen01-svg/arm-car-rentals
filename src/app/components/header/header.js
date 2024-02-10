import { cookies } from "next/headers";
import HeaderContent from "./header_content";

export default async function Header() {
  const token = cookies().get("token")?.value || "";

  return (
    <div className="max-w-full h-14 bg-white sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16">
      <HeaderContent token={token} />
    </div>
  );
}
