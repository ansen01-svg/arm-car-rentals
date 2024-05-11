import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function UneditableSelectField(props) {
  const { defaultValue, labelTitle, labelFor } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <label htmlFor={labelFor} className="text-[13px] text-gray2 font-medium">
        {labelTitle}
      </label>
      <FormControl fullWidth variant="standard">
        <NativeSelect
          disabled
          disableUnderline
          id={labelFor}
          name={labelFor}
          defaultValue={defaultValue}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          sx={{
            height: "35px",
            color: "#24272c",
            fontSize: "13px",
            borderRadius: "4px",
            background: "#f7f7f7",
            paddingLeft: "10px",
            ".MuiSelect-select": { padding: "4.7px 14px" },
          }}
        >
          <option value={defaultValue}>{defaultValue}</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
