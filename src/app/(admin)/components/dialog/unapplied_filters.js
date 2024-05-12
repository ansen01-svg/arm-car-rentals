import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FiltersButton from "./filters_button";

export default function UnappliedFilters(props) {
  const { availableFilters, handleAvailableFiltersBtnClick } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-[10px]">
      <div className="w-full">
        <p className="text-[14px] text-primary">Select filters to add</p>
      </div>
      <div className="w-full flex items-center justify-start flex-wrap gap-[10px]">
        {availableFilters.map((filter, index) => {
          return (
            <FiltersButton
              key={index}
              title={filter}
              icon={<AddOutlinedIcon sx={{ fontSize: "16px" }} />}
              handleClick={handleAvailableFiltersBtnClick}
            />
          );
        })}
      </div>
    </div>
  );
}
