export default function Button(props) {
  const { title, disableBtn } = props;

  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="submit"
        disabled={disableBtn}
        className="w-full h-[50px] bg-secondary text-white text-[15px] font-semibold rounded hover:bg-hover disabled:bg-disabled"
      >
        {title}
      </button>
    </div>
  );
}
