import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";
import Label from "@/app/components/label/label";

export default function DetailsHolder(props) {
  const { car, disableBtnId, setDisableBtnId } = props;
  const { desktopScreen } = useWindowWidth();

  return (
    <div className="flex-1 px-2 py-2 flex flex-col items-start justify-center md:flex-row md:items-center">
      <CarDetails car={car} />
      <ExtraTextsHolder />
      {desktopScreen && (
        <ReserveButton
          id={car._id}
          disableBtnId={disableBtnId}
          setDisableBtnId={setDisableBtnId}
        />
      )}
    </div>
  );
}

function CarDetails({ car }) {
  const { carName, capacity, carType, price, specification } = car;

  return (
    <div className="flex-1 py-2 flex flex-col items-start justify-center gap-2 md:px-2 md:py-6">
      {price < 10000 && <Label />}
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
      <p className="font-medium">{carType}</p>
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
      {/* <ExtraTextsHolder /> */}
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
      <div className="text-[14px] text-gray1 flex flex-row items-center content-center gap-7">
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

export function ExtraTextsHolder() {
  return (
    <div className="text-[13px] text-primary flex flex-col items-start justify-center gap-1 md:mr-10">
      <p>Free cancellation</p>
      <p>Pay at pick-up</p>
    </div>
  );
}

function ReserveButton(props) {
  const { id, disableBtnId, setDisableBtnId } = props;

  const handleClick = (id) => {
    setDisableBtnId(id);
    const details = window.location.href.split("?")[1];
    window.open(`/cars/${id}?${details}`);
    setDisableBtnId(null);
  };

  return (
    <div className="px-3">
      <button
        className="w-28 h-10 text-[14px] text-secondary border-[1px] border-secondary rounded-sm"
        disabled={id === disableBtnId}
        onClick={() => handleClick(id)}
      >
        Reserve
      </button>
    </div>
  );
}
