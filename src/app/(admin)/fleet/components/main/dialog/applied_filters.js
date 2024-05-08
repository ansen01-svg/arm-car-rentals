import CloseIcon from "@mui/icons-material/Close";
import FiltersButton from "./filters_button";

export default function AppliedFilters(props) {
  const { filters, handleAppliedFiltersBtnClick, clearFilters } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-[10px]">
      <div className="w-full">
        <p className="text-[14px] text-primary">Added filters</p>
      </div>
      <div className="w-full flex items-center justify-start flex-wrap gap-[10px]">
        {filters.map((filter) => {
          return (
            <FiltersButton
              key={filter}
              title={filter}
              icon={<CloseIcon sx={{ fontSize: "16px" }} />}
              handleClick={handleAppliedFiltersBtnClick}
            />
          );
        })}
        <FiltersButton
          title={"Clear all filters"}
          icon={<CloseIcon sx={{ fontSize: "16px" }} />}
          handleClick={clearFilters}
        />
      </div>
    </div>
  );
}
