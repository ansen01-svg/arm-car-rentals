import { useState } from "react";
import Card from "./card/card";

export default function CarsHolder(props) {
  const { cars } = props;

  const [disableBtnId, setDisableBtnId] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      {cars.length < 1 ? (
        <NoCars />
      ) : (
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
      )}
    </div>
  );
}

function NoCars() {
  return (
    <div className="mt-[100px] font-semibold text-gray2">
      <p>No cars to show</p>
    </div>
  );
}
