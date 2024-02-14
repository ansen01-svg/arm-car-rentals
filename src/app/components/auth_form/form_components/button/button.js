export default function Button(props) {
  const { title, disableBtn } = props;

  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="submit"
        disabled={disableBtn}
        className="w-full h-[50px] bg-secondary text-white font-medium rounded hover:bg-secondaryLight disabled:bg-secondaryLight"
      >
        {title}
      </button>
    </div>
  );
}
