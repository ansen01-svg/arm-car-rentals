import Logo from "./logo/logo";
import Links from "./links/links";

export default function Header() {
  return (
    <div className="max-w-full  h-14 sticky top-0 left-0 border-b-[1px] border-slate-200 flex items-center justify-between px-6 md:h-16 md:px-20">
      <Logo />
      <Links />
    </div>
  );
}
