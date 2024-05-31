import Content from "./page_content";
import verifyEmail from "@/app/_lib/frontend/verifyEmail";
import revalidateAction from "@/app/actions/revalidate";

export const metadata = {
  title: "Verify Your Email | Carko.in",
  description:
    "Verify your email address to complete your Carko.in account setup. Secure your account today!",
};

export default async function VerifyEmail({ searchParams }) {
  await revalidateAction(`/verify_email?token=${searchParams.token}`);
  const data = await verifyEmail(searchParams.token);

  return (
    <div className="max-w-full">
      <Content data={data} token={searchParams.token} />
    </div>
  );
}
