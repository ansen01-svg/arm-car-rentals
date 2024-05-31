import Content from "./page_content";

export const metadata = {
  title: "Reset Your Password | Carko.in",
  description:
    "Create a new password for your Carko.in account. Enter your new password to secure your account and get back to managing your bookings. Reset your password now.",
};

export default function ResetPassword({ searchParams }) {
  return (
    <div className="max-w-full mt-[50px] flex flex-col items-center justify-center">
      <Content token={searchParams.token} />
    </div>
  );
}
