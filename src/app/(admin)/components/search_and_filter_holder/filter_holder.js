import "../../styles/components.css";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

export default function FilterButton({ handleClickOpen, highlight }) {
  const btnClass = `px-5 py-3 font-bold rounded-full hover:bg-primary ${
    highlight ? "text-blue" : "text-gray1"
  }`;

  return (
    <div>
      <button
        className={btnClass}
        id={highlight ? "highlightText" : ""}
        onClick={handleClickOpen}
      >
        <FilterListOutlinedIcon fontSize="small" sx={{ marginRight: "15px" }} />
        Filter
      </button>
    </div>
  );
}
