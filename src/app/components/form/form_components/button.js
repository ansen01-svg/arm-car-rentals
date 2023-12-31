export default function Button() {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="submit"
        className="w-full h-12 bg-black border-[1px] border-slate-200 rounded text-white font-bold md:w-80"
      >
        Search
      </button>
    </div>
  );
}
