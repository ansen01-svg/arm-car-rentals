export default function Button(props) {
  return (
    <div className="w-full flex flex-row items-center justify-end lg:justify-center">
      <button className="px-4 py-2 bg-secondary border-[1px] border-slate-200 rounded text-white text-[15px] font-medium hover:bg-hover lg:w-full lg:h-12 lg:font-bold">
        Reserve
      </button>
    </div>
  );
}
