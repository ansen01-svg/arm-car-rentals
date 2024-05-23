import Link from "next/link";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "404 Page not found",
};

const apologyTxt = `We apologize, but we cannot find the page you’re looking for.`;

export default async function NotFound() {
  return (
    <div className="max-w-full h-[100vh] bg-primary">
      <Header />
      <div className="w-full h-[355px] px-3 flex flex-col items-center justify-center gap-2">
        <p className="font-semibold">404 | Page not found.</p>
        <p className="text-primary text-[14px]">{apologyTxt}</p>
        <p className="text-primary text-[14px]">
          Go back to &nbsp;
          <Link href={"/"} className="text-orange-500 underline text-[14px]">
            Home
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
