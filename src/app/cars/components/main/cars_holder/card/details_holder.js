import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function DetailsHolder(props) {
  const { car } = props;

  const { desktopScreen } = useWindowWidth();

  return (
    <div className="flex-1 h-full flex flex-row items-center justify-center">
      <CarDetails car={car} />
      {desktopScreen && <ReserveButton />}
    </div>
  );
}

function CarDetails({ car }) {
  const { carName, capacity, carType, price, specification } = car;

  return (
    <div className="flex-1 px-2 py-6 flex flex-col items-start justify-center gap-1 md:px-6 md:py-6">
      <TitleHolder carType={carType} />
      <OtherDetailsholder
        carName={carName}
        capacity={capacity}
        specification={specification}
        price={price}
      />
    </div>
  );
}

function TitleHolder({ carType }) {
  return (
    <div className="w-full">
      <p className="font-bold">{carType}</p>
    </div>
  );
}

function OtherDetailsholder(props) {
  const { carName, specification, capacity, price } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-1 md:flex-row">
      <CarDetailsHolder
        carName={carName}
        specification={specification}
        capacity={capacity}
        price={price}
      />
      <ExtraTextsHolder />
    </div>
  );
}

function CarDetailsHolder(props) {
  const { carName, capacity, price, specification } = props;

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full">
        <p className="text-[14px] text-primary">{carName}</p>
      </div>
      <div className="text-[14px] text-primary flex flex-row items-center content-center gap-7">
        <div className="flex flex-row items-center content-center gap-2">
          <PersonOutlineOutlinedIcon fontSize="small" />
          <p>{capacity}</p>
        </div>
        <div className="flex flex-row items-center content-center gap-2">
          <DriveEtaOutlinedIcon fontSize="small" />
          <p>{specification}</p>
        </div>
      </div>
      <div className="w-full">
        <p className="font-bold text-[18px] text-primary">Rs {price}</p>
      </div>
    </div>
  );
}

function ExtraTextsHolder() {
  return (
    <div className="w-full flex flex-col gap-1">
      <p className="text-[14px] text-green-700">Free cancellation</p>
      <p className="text-[14px] text-green-700">Pay at pick-up</p>
    </div>
  );
}

function ReserveButton(props) {
  return (
    <div className="px-3">
      <button className="w-28 h-10 font-bold rounded bg-secondary text-white hover:bg-hover">
        Reserve
      </button>
    </div>
  );
}
