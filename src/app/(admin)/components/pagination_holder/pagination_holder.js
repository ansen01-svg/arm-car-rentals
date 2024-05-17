import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

export default function PaginationHolder(props) {
  const {
    currentPage,
    handlePrevBtn,
    handleNextBtn,
    disablePrevBtn,
    disableNextBtn,
  } = props;

  return (
    <div className="w-full px-6 py-4 flex items-center justify-end lg:px-0">
      <div className="text-gray1 text-[13px] flex flex-row items-center justify-center gap-2 lg:px-0">
        <button
          className="disabled:text-gray2"
          onClick={handlePrevBtn}
          disabled={disablePrevBtn}
        >
          <NavigateBeforeOutlinedIcon fontSize="small" />
        </button>
        <span>Page {currentPage}</span>
        <button
          className="disabled:text-gray2"
          onClick={handleNextBtn}
          disabled={disableNextBtn}
        >
          <NavigateNextOutlinedIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}
