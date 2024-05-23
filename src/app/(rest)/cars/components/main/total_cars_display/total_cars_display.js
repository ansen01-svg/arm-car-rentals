import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useMediaQuery } from "@mui/material";

import TextField from "@mui/material/TextField";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    border: "none",
    fontSize: 14,
    backgroundColor: theme.palette.background.paper,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

export default function TotalCarsDisplay(props) {
  const { carsLength, value, handleChange } = props;

  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-gray1 text-[13px]">
        {carsLength > 1 ? (
          <p>{carsLength} cars are available</p>
        ) : (
          <p>{carsLength} car is available</p>
        )}
        Price includes taxes and fees
      </div>
      {desktopScreen && (
        <SortHolder value={value} handleChange={handleChange} />
      )}
    </div>
  );
}

function SortHolder({ value, handleChange }) {
  return (
    <div className="w-[30%] border-[1px] border-slate-200 rounded-lg">
      <TextField
        id="cars-sort-select"
        fullWidth
        select
        label="Sort by"
        helperText=""
        variant="standard"
        value={value}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          background: "white",
          borderRadius: "8px",
          paddingBottom: "2px",
          ".MuiFormLabel-root": {
            top: "5px",
            left: "5px",
            bottom: "5px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "rgba(0, 0, 0, 0.6)",
          },
          ".MuiInputBase-root": {
            padding: "0 5px",
            fontSize: "14px",
            top: "2px",
          },
        }}
      >
        <MenuItem
          value={value}
          sx={{
            fontSize: "14px",
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "white",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          {value}
        </MenuItem>
        <MenuItem
          value={
            value === "Price low to high"
              ? "Price high to low"
              : "Price low to high"
          }
          sx={{ fontSize: "14px" }}
        >
          {value === "Price low to high"
            ? "Price high to low"
            : "Price low to high"}
        </MenuItem>
      </TextField>
    </div>
  );
}
