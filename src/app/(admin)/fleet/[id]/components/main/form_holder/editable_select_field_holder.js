import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid rgba(36,39,44,.25)",
    fontSize: 14,
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
    "&:focus": {
      border: "1px solid #24272c",
      borderRadius: 4,
      backgroundColor: "white",
    },
  },
}));

export default function EditableSelectField(props) {
  const { isEditing, value, handleChange, labelTitle, labelFor } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <label htmlFor={labelFor} className="text-[13px] text-gray2 font-medium">
        {labelTitle}
      </label>
      <FormControl fullWidth variant="standard">
        <Select
          input={<BootstrapInput />}
          size="small"
          required
          displayEmpty
          disabled={!isEditing ? true : false}
          id={labelFor}
          name={labelFor}
          value={value}
          onChange={handleChange}
          sx={{
            height: "32.39px",
            color: "#24272c",
            fontSize: "13px",
            ".MuiSelect-select": { padding: "4.7px 14px" },
          }}
        >
          <MenuItem value={value} sx={{ fontSize: "13px" }}>
            <em>{value}</em>
          </MenuItem>
          <MenuItem
            value={value === "Checked in" ? "Checked out" : "Checked in"}
            sx={{ fontSize: "13px" }}
          >
            {value === "Checked in" ? "Checked out" : "Checked in"}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
