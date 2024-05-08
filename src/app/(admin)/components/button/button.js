export default function AdminButton(props) {
  const { handleClick, title } = props;

  return (
    <button
      className="px-4 py-2 bg-secondary text-white text-[13px] font-semibold rounded-full hover:bg-secondaryLight"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
