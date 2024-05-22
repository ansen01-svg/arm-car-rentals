export default function Button({ disabled }) {
  return (
    <div className="w-full flex items-center justify-center lg:w-[10%]">
      <button
        type="submit"
        disabled={disabled}
        className="w-full h-[50px] bg-secondary rounded text-white font-medium md:w-80 hover:bg-secondaryLight disabled:bg-secondaryLight"
      >
        Search
      </button>
    </div>
  );
}
