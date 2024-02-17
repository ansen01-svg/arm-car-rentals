import Ul from "./ul";

export default function Links() {
  return (
    <div className="w-full h-12 px-3 sticky top-14 left-0 flex flex-row items-center justify-start bg-white shadow-md overflow-y-auto lg:h-13 lg:px-20 lg:top-16 z-50">
      <nav className="w-full h-full">
        <Ul />
      </nav>
    </div>
  );
}
