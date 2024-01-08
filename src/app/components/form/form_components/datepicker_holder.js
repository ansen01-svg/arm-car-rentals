import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function DatePickerHolder(props) {
  const { labelTitle, value, handleChange, minDate, size } = props;

  const { mobileScreen } = useWindowWidth();

  return (
    <div className="w-1/2 h-14 border-[1px] border-slate-300 rounded whitespace-nowrap">
      <p className="mx-3">{labelTitle}</p>
      {mobileScreen ? (
        <MobileDatePicker
          disablePast
          format="DD-MM-YYYY"
          minDate={minDate || null}
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
