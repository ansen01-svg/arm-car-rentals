import Content from "./page_content";

export const metadata = {
  title: "Reset your password",
};

export default function ResetPassword({ searchParams }) {
  return (
    <div className="max-w-full mt-[50px] flex flex-col items-center justify-center">
      <Content token={searchParams.token} />
    </div>
  );
}
