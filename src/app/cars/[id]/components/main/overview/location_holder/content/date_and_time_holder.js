"use client";

import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { address } from "../../../../../../../utils/constants";

export default function DateAndTimeHolder() {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-4">
      <DateAndTime />
      <Location />
    </div>
  );
}

function DateAndTime(props) {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <EventOutlinedIcon fontSize="small" sx={{ color: "#666" }} />
      <div className="flex flex-row items-center justify-center gap-1 text-primary text-[14px]">
        <p>pud,</p>
        <p>put</p>
        <p>-</p>
        <p>dod,</p>
        <p>dot</p>
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
