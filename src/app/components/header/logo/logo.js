import Link from "next/link";

export default function Logo() {
  return (
    <div className="">
      <Link href={"/"}>
        <h1 className="text-lg font-bold text-secondary ">
          ARM
          {/* Rental<span className="text-slate-400">Cars</span> */}
        </h1>
      </Link>
    </div>
  );
}
