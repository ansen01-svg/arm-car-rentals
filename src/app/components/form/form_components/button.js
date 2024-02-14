export default function Button() {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="submit"
        className="w-full h-12 bg-secondary rounded text-white font-medium shadow-[0 8px 8px 0 rgba(247, 93, 52, .5)] md:w-80"
      >
        Search
      </button>
    </div>
  );
}
