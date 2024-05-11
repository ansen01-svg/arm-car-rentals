import TextField from "@mui/material/TextField";

export default function UneditableTextField(props) {
  const { defaultValue, labelTitle, labelFor } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <label htmlFor={labelFor} className="text-[13px] text-gray2 font-medium">
        {labelTitle}
      </label>
      <TextField
        size="small"
        variant="standard"
        fullWidth
        required
        disabled
        label=""
        id={labelFor}
        name={labelFor}
        defaultValue={defaultValue}
        InputProps={{
          disableUnderline: true,
          style: {
            height: "35px",
            fontSize: "13px",
            borderRadius: "4px",
            background: "#f7f7f7",
            paddingLeft: "10px",
          },
        }}
      />
    </div>
  );
}
