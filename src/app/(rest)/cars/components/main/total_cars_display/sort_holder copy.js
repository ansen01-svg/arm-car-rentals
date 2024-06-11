import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

export default function SortHolder1({ value, handleChange }) {
  return (
    <div className="flex items-center justify-center">
      <p className="text-gray2 text-[14px]">Sort by:</p>
      <TextField
        id="cars-sort-select"
        // fullWidth
        select
        helperText=""
        variant="standard"
        value={value}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
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
          // ".MuiSelect-select": {
          //   backgroundColor: "white",
          //   "&.Mui-selected": { backgroundColor: "white" },
          //   "&.Mui-focused": {
          //     backgroundColor: "white",
          //   },
          // },
        }}
      >
        <MenuItem
          value={"Price low to high"}
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
          {"Price low to high"}
        </MenuItem>
        <MenuItem value={"Price high to low"} sx={{ fontSize: "14px" }}>
          {"Price high to low"}
        </MenuItem>
      </TextField>
    </div>
  );
}
