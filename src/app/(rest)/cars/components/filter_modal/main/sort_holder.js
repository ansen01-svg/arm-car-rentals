import Header from "./header";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function SortHolder(props) {
  const { value, handleChange } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header title={"Sort by"} />
      <div className="w-full flex flex-col items-start justify-center">
        <FormControl>
          <RadioGroup
            aria-labelledby="sort-radio-buttons-group"
            name="sort-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={"Price low to high"}
              control={
                <Radio size="small" checked={value === "Price low to high"} />
              }
              label="Price low to high"
              sx={{
                ".MuiTypography-root": {
                  fontSize: "14px",
                  color: "rgba(36,39,44,.7)",
                },
              }}
            />
            <FormControlLabel
              value="Price high to low"
              control={
                <Radio size="small" checked={value === "Price high to low"} />
              }
              label="Price high to low"
              sx={{
                ".MuiTypography-root": {
                  fontSize: "14px",
                  color: "rgba(36,39,44,.7)",
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
