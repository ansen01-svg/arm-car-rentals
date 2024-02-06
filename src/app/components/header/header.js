import { cookies } from "next/headers";
import HeaderContent from "./header_content";

export default async function Header() {
  const token = cookies().get("token")?.value || "";

  // const response = await fetch(`http://localhost:3000/api/user/getCurrentUser`);
  // const data = await response.json();

  return (
    <div className="max-w-full h-14 bg-white sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16">
      <HeaderContent token={token} />
    </div>
  );
}
