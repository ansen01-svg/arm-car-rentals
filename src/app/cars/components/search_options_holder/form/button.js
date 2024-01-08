export default function Button() {
  return (
    <div className="w-full flex items-center justify-center lg:w-[10%]">
      <button
        type="submit"
        className="w-full h-12 bg-secondary border-[1px] border-slate-200 rounded text-white font-bold md:h-14 md:w-80"
      >
        Search
      </button>
    </div>
  );
}
