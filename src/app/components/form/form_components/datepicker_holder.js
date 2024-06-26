import "../styles/picker_holder.css";
import { useMediaQuery } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function DatePickerHolder(props) {
  const { labelTitle, value, handleChange, minDate, dateError } = props;

  const mobileScreen = useMediaQuery("(max-width:1024px)");

  return (
    <div className={`picker-holder ${dateError ? "error" : ""}`}>
      <p className="text-xs px-3">{labelTitle}</p>
      {mobileScreen ? (
        <MobileDatePicker
          disablePast
          format="DD-MM-YYYY"
          minDate={minDate || null}
          value={value}
          onChange={handleChange}
          sx={{
            width: "100%",
            ".MuiInputBase-root": {
              fontSize: "15px",
              // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
            },
            ".MuiInputBase-input": {
              height: "0.8em",
              padding: "8.5px 12px",
            },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        />
      ) : (
        <DesktopDatePicker
          disablePast
          format="DD-MM-YYYY"
          minDate={minDate || null}
          value={value}
          onChange={handleChange}
          sx={{
            width: "100%",
            ".MuiInputBase-root": {
              paddingRight: "12px",
              fontSize: "15px",
              // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
            },
            ".MuiInputBase-input": {
              height: "0.84em",
              padding: "8.5px 12px",
              // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
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
