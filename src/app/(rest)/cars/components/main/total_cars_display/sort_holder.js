import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

export default function SortHolder({ value, handleChange }) {
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
            left: "10px",
            bottom: "5px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "rgba(0, 0, 0, 0.6)",
          },
          ".MuiInputBase-root": {
            padding: "0 10px",
            fontSize: "14px",
            top: "2px",
          },
          ".MuiSelect-select": {
            backgroundColor: "white",
            "&.Mui-selected": { backgroundColor: "white" },
            "&.Mui-focused": {
              backgroundColor: "white",
            },
          },
        }}
      >
        <MenuItem
          value={value}
          sx={{
            fontSize: "14px",
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
