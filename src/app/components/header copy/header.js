import Logo from "./logo/logo";
import Links from "./links/links";

export default function Header() {
  return (
    <div className="max-w-full h-14 px-6 flex items-center justify-between bg-white sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16 lg:px-20">
      <Logo />
      <Links />
    </div>
  );
}
