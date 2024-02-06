import Link from "next/link";

const linkText = "Already have an account?";

export default function LinkHolder() {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <p className="text-[13px]">
        {linkText}&nbsp;
        <Link
          href="/signin"
          style={{ color: "#1f9990", textDecoration: "underline" }}
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
