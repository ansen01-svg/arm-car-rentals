import dayjs from "dayjs";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { address } from "@/app/utils/constants";

export default function SearchFieldsHolder(props) {
  const { setShowForm, pickupDate, dropoffDate, pickupTime, dropoffTime } =
    props;

  return (
    <div className="w-full px-3 py-3 lg:px-20 flex items-start justify-start gap-4">
      <SearchIconHolder setShowForm={setShowForm} />
      <FieldsHolder
        pickupDate={pickupDate}
        dropoffDate={dropoffDate}
        pickupTime={pickupTime}
        dropoffTime={dropoffTime}
      />
    </div>
  );
}

function SearchIconHolder({ setShowForm }) {
  return (
    <div className="text-primary">
      <button onClick={() => setShowForm(true)}>
        <SearchOutlinedIcon fontSize="small" />
      </button>
    </div>
  );
}

function FieldsHolder(props) {
  const { pickupDate, dropoffDate, pickupTime, dropoffTime } = props;

  return (
    <div className="text-primary flex flex-col items-start content-center gap-1">
      <div>
        <h1 className="font-medium">{address}</h1>
      </div>
      <div className="text-xs text-primary flex items-start content-center gap-2">
        {pickupDate && <p>{dayjs(pickupDate).format("DD/MM/YY")},</p>}
        {pickupTime && <p>{dayjs(pickupTime).format("HH:mm a")}</p>}
        {pickupDate && <p className="text-xs text-primary">-</p>}
        {dropoffDate && <p>{dayjs(dropoffDate).format("DD/MM/YY")},</p>}
        {dropoffTime && <p>{dayjs(dropoffTime).format("HH:mm a")}</p>}
      </div>
    </div>
  );
}
