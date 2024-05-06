import AsideNav from "./nav";
import LogoHolder from "./logo_holder";
import UserHolder from "./user_holder";

export default function DesktopAside({ user }) {
  return (
    <div className="w-[260px] h-screen py-6 flex flex-col items-center justify-between bg-primary border-r-[1px] border-slate-200">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <LogoHolder />
        <AsideNav />
      </div>
      <UserHolder user={user} />
    </div>
  );
}
