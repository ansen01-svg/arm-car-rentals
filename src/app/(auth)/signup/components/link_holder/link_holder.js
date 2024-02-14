import Link from "next/link";

const linkText = "Already have an account?";

export default function LinkHolder() {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <p className="text-[13px] text-primary">
        {linkText}&nbsp;
        <Link href="/signin" className="text-blue underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
