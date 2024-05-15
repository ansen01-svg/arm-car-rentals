import { useState } from "react";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import Card from "./card/card";

export default function CarsHolder(props) {
  const { cars } = props;

  const [disableBtnId, setDisableBtnId] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      {cars.length > 0 ? (
        cars.map((car) => {
          return (
            <Card
              key={car._id}
              car={car}
              disableBtnId={disableBtnId}
              setDisableBtnId={setDisableBtnId}
            />
          );
        })
      ) : (
        <NoCars />
      )}
    </div>
  );
}

function NoCars() {
  return (
    <div className="mt-[100px] text-gray2 flex flex-col items-center justify-center gap-3">
      <HourglassEmptyOutlinedIcon fontSize="large" />
      <p className="text-[14px]">
        No cars found. Adjust your search and try again.
      </p>
    </div>
  );
}
