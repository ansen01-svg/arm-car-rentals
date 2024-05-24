import TextField from "@mui/material/TextField";

export default function FieldHolder(props) {
  const { label, labelFor, value, handleChange } = props;

  return (
    <div className="w-full flex items-center justify-between">
      <label className="text-[13px] text-primary" htmlFor={labelFor}>
        {label}
      </label>
      <div className="w-[75%]">
        <TextField
          size="small"
          fullWidth
          required
          id={labelFor}
          name={labelFor}
          value={value}
          onChange={handleChange}
          InputProps={{
            style: {
              color: "#24272c",
              fontSize: "13px",
              // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
            },
          }}
          sx={{
            ".MuiInputBase-input": {
              height: "1.1em",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "1px solid #666",
                // border: "1px solid #f75d34",
              },
            },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
            },
          }}
        />
      </div>
    </div>
  );
}
