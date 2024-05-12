export default function FiltersButton(props) {
  const { title, handleClick, icon } = props;

  return (
    <button
      className="px-2 py-1 text-[12px] text-gray1 border-[1px] border-slate-500 rounded-full flex flex-row items-center justify-center gap-2"
      onClick={() => handleClick(title)}
    >
      <span>{title}</span>
      {icon}
    </button>
  );
}
