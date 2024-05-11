export function EditButton(props) {
  const { handleClick, title } = props;

  return (
    <button
      className="px-5 py-2 bg-secondary text-white text-[13px] font-semibold rounded-full hover:bg-secondaryLight"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export function SaveButton(props) {
  const { handleClick, disabled } = props;

  return (
    <button
      className="px-5 py-2 bg-green text-white text-[13px] font-semibold rounded-full hover:bg-green disabled:bg-[rgb(141, 201, 111)]"
      disabled={disabled}
      onClick={handleClick}
    >
      Save
    </button>
  );
}
