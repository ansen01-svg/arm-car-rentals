import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function TimepickerHolder(props) {
  const { labelTitle, value, handleChange, disablePastPickupTime } = props;

  const { mobileScreen } = useWindowWidth();

  return (
    <div className="w-1/2 border-[1px] border-slate-300 rounded">
      <p className="mx-3">{labelTitle}</p>
      {mobileScreen ? (
        <MobileTimePicker
          format="hh:mm a"
          disablePast={disablePastPickupTime}
          value={value}
          onChange={handleChange}
          sx={{
            ".MuiInputBase-root": {
              fontSize: "1rem",
            },
            ".MuiInputBase-input": {
              height: "0.8em",
              padding: "8.5px 12px",
            },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        />
      ) : (
        <DesktopTimePicker
          format="hh:mm a"
          disablePast={disablePastPickupTime}
          value={value}
          onChange={handleChange}
          sx={{
            width: "100%",
            ".MuiInputBase-root": {
              paddingRight: "12px",
            },
            ".MuiInputBase-input": {
              height: "0.84em",
              padding: "8.5px 12px",
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      )}
    </div>
  );
}
