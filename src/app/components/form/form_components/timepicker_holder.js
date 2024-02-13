import "../styles/picker_holder.css";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function TimepickerHolder(props) {
  const { labelTitle, value, handleChange, timeError } = props;

  const { mobileScreen } = useWindowWidth();

  return (
    <div className={`picker-holder ${timeError ? "error" : ""}`}>
      <p className="text-xs px-3">{labelTitle}</p>
      {mobileScreen ? (
        <MobileTimePicker
          format="hh:mm a"
          value={value}
          onChange={handleChange}
          sx={{
            ".MuiInputBase-root": {
              fontSize: "15px",
              fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
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
          value={value}
          onChange={handleChange}
          sx={{
            width: "100%",
            ".MuiInputBase-root": {
              paddingRight: "12px",
              fontSize: "15px",
              fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
            },
            ".MuiInputBase-input": {
              height: "0.84em",
              padding: "8.5px 12px",
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            ".MuiSvgIcon-root": {
              fontSize: "1.25rem",
            },
          }}
        />
      )}
    </div>
  );
}
