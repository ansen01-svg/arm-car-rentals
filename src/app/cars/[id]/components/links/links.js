import Ul from "./ul";

export default function Links(props) {
  return (
    <div className="w-full h-12 px-3 flex flex-row items-center justify-start bg-white border-b-[1px] border-slate-200 lg:h-13 lg:px-20">
      <nav className="w-full h-full">
        <Ul />
      </nav>
    </div>
  );
}
