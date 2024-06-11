import { useMediaQuery } from "@mui/material";
import SortHolder from "./sort_holder";
// import SortHolder1 from "./sort_holder copy";

export default function TotalCarsDisplay(props) {
  const { carsLength, value, handleChange } = props;

  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-gray1 text-[13px]">
        {carsLength > 1 ? (
          <p>{carsLength} cars are available</p>
        ) : (
          <p>{carsLength} car is available</p>
        )}
        Price includes taxes and fees
      </div>
      {desktopScreen && (
        <SortHolder value={value} handleChange={handleChange} />
      )}
    </div>
  );
}
