import TuneIcon from "@mui/icons-material/Tune";

export default function FilterButtonHolder(props) {
  const { dispatch } = props;

  return (
    <div className="w-full px-3 py-3 lg:px-20 flex justify-center content-center">
      <button
        className="w-full h-10 bg-white border-[1px] border-slate-200 rounded flex flex-row items-center justify-center gap-2 text-secondary font-medium md:w-80 hover:text-white hover:bg-secondary"
        onClick={() => dispatch({ type: "SHOW_FILTER_MODAL", payload: true })}
      >
        <TuneIcon fontSize="small" />
        <p>Filter</p>
      </button>
    </div>
  );
}
