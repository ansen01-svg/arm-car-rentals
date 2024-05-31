import Content from "./page_content";

export const metadata = {
  title: "Forgot Password | Carko.in",
  description:
    "Forgot your password? Request a password reset link from Carko.in. Enter your email address to receive instructions on how to reset your password securely.",
};

export default function ForgotPassword() {
  return (
    <div className="max-w-full mt-[50px] flex flex-col items-center justify-center">
      <Content />
    </div>
  );
}
