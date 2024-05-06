import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full px-6 py-4 flex items-center justify-start gap-1 text-[14px] text-gray1 lg:px-0">
      <div>
        <Link href={"/fleet"}>Fleet</Link>
      </div>
      <div>
        <p>&gt;</p>
      </div>
      <div>
        <p>New</p>
      </div>
    </div>
  );
}
