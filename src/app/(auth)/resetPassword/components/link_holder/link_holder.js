import Link from "next/link";

export default function LinkHolder() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <p className="text-[13px]">
        or&nbsp;
        <Link href="/signin" className="text-blue underline">
          Signin
        </Link>
      </p>
    </div>
  );
}
