import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

export default function FilterButton({ handleClickOpen }) {
  return (
    <div>
      <button
        className="px-5 py-3 font-bold text-gray1 rounded-full hover:bg-primary"
        onClick={handleClickOpen}
      >
        <FilterListOutlinedIcon fontSize="small" sx={{ marginRight: "15px" }} />
        Filter
      </button>
    </div>
  );
}
