import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { address } from "../../../../../../../utils/constants";

export default function DateAndTimeHolder(props) {
  const { dates, time } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-4">
      <DateAndTime dates={dates} time={time} />
      <Location />
    </div>
  );
}

function DateAndTime(props) {
  const { dates, time } = props;

  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <EventOutlinedIcon fontSize="small" sx={{ color: "#666" }} />
      <div className="flex flex-row items-center justify-center gap-1 text-primary text-[14px]">
        {dates.pickupDate && <p>{dates.pickupDate},</p>}
        {time.pickupTime && <p>{time.pickupTime}</p>}
        {time.pickupTime && <p>-</p>}
        {dates.dropoffDate && <p>{dates.dropoffDate},</p>}
        {time.dropoffTime && <p>{time.dropoffTime}</p>}
      </div>
    </div>
  );
}

function Location() {
  return (
    <span>
      <p className="text-[14px] text-primary">{address}</p>
    </span>
  );
}
