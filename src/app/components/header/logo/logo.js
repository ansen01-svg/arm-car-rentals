import Link from "next/link";

export default function Logo() {
  return (
    <div className="">
      <Link href={"/"}>
        <h1 className="text-lg font-bold text-primary">ARM</h1>
      </Link>
    </div>
  );
}
