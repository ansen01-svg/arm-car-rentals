import Link from "next/link";

const linkText = `Don't have an account?`;

export default function LinkHolder() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <p className="text-[13px]">
        or&nbsp;
        <Link href="/resetPassword" className="text-blue underline">
          Forgot Password?
        </Link>
      </p>
      <p className="text-[13px]">
        {linkText}&nbsp;
        <Link href="/signup" className="text-blue underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
