import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default async function PageContent() {
  return (
    <div className="w-full h-[calc(100vh-64px-224px)] px-5 md:px-6 lg:px-20">
      <div className="w-full h-[50px] py-2 text-[12px] flex items-start justify-start gap-2">
        <Link href={"/"}>Home</Link>
        <p>{">"}</p>
        <p className="text-gray2">Contact us</p>
      </div>
      <div className="w-full px-5 py-5 bg-white border-[1px] border-slate-200 flex flex-col items-center justify-center gap-6 rounded-2xl shadow-sm">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-semibold text-primary md:text-2xl">
            Contact Us
          </h1>
          <div className="w-full flex items-center justify-start gap-3">
            <EmailOutlinedIcon sx={{ color: "#f75d34" }} />
            <p className="text-primary text-[15px] text-left md:text-[16px]">
              EMAIL - mozilbey@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
