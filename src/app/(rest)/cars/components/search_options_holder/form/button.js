export default function Button() {
  return (
    <div className="w-full flex items-center justify-center lg:w-[10%]">
      <button
        type="submit"
        className="w-full h-[50px] bg-secondary rounded text-white font-semibold hover:bg-hover md:w-80"
      >
        Search
      </button>
    </div>
  );
}
