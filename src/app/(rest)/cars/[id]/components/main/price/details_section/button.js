export default function Button(props) {
  const { handleReserveBtnClick, disableBtn } = props;

  return (
    <div className="w-full flex flex-row items-center justify-end lg:justify-center">
      <button
        className="px-4 py-2 bg-secondary rounded text-white text-[15px] font-semibold hover:bg-hover disabled:bg-disabled lg:w-full lg:h-12"
        disabled={disableBtn}
        onClick={handleReserveBtnClick}
      >
        Reserve
      </button>
    </div>
  );
}
