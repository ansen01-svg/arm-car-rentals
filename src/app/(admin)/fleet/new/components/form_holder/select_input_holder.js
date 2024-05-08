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

export default function SelectInputHolder(props) {
  const { label, labelFor, values, value, handleChange } = props;

  return (
    <div className="w-full flex items-center justify-between">
      <label className="text-[13px] text-primary" htmlFor={labelFor}>
        {label}
      </label>
      <div className="w-[75%]">
        <FormControl fullWidth variant="standard">
          <Select
            input={<BootstrapInput />}
            size="small"
            required
            displayEmpty
            id={labelFor}
            name={labelFor}
            value={value}
            onChange={handleChange}
            // InputProps={{
            //   "aria-label": "Without label",
            //   style: {
            //     color: "#24272c",
            //     fontSize: "14px",
            //   },
            // }}
            sx={{
              height: "32.39px",
              color: "#24272c",
              fontSize: "13px",
              ".MuiSelect-select": { padding: "4.7px 14px" },
            }}
          >
            {values.map((val) => {
              return (
                <MenuItem
                  key={val.id}
                  value={val.value}
                  sx={{ fontSize: "13px" }}
                >
                  {val.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
