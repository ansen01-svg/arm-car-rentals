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
    <div>
      <button onClick={() => setShowForm(true)}>
        <SearchOutlinedIcon fontSize="small" sx={{ color: "#666" }} />
      </button>
    </div>
  );
}

function FieldsHolder(props) {
  const { pickupDate, dropoffDate, pickupTime, dropoffTime } = props;

  return (
    <div className="flex flex-col items-start content-center gap-1">
      <div>
        <p className="font-medium text-primary">{address}</p>
      </div>
      <div className="flex items-start content-center gap-2">
        {pickupDate && (
          <p className="text-xs text-primary">
            {dayjs(pickupDate).format("DD/MM/YY")},
          </p>
        )}
        {pickupTime && (
          <p className="text-xs text-primary">
            {dayjs(pickupTime).format("HH:mm a")}
          </p>
        )}
        {pickupDate && <p className="text-xs text-primary">-</p>}
        {dropoffDate && (
          <p className="text-xs text-primary">
            {dayjs(dropoffDate).format("DD/MM/YY")},
          </p>
        )}
        {dropoffTime && (
          <p className="text-xs text-primary">
            {dayjs(dropoffTime).format("HH:mm a")}
          </p>
        )}
      </div>
    </div>
  );
}
