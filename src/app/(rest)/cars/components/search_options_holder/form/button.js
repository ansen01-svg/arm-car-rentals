export default function Button() {
  return (
    <div className="w-full flex items-center justify-center lg:w-[10%]">
      <button
        type="submit"
        className="w-full h-[50px] bg-secondary border-[1px] border-slate-200 rounded text-white font-bold hover:bg-hover md:w-80"
      >
        Search
      </button>
    </div>
  );
}
