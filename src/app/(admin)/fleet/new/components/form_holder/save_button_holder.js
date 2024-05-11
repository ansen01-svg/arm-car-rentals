export default function SaveButtonHolder({ disabled }) {
  return (
    <div className="w-full flex items-center justify-end">
      <button
        className="px-6 py-2 bg-secondary text-white text-[13px] font-semibold rounded-full hover:bg-secondaryLight disabled:bg-secondaryLight"
        disabled={disabled}
      >
        Save
      </button>
    </div>
  );
}
