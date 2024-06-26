import TextField from "@mui/material/TextField";

export default function FieldHolder(props) {
  const {
    value,
    type,
    placeholder,
    disabled,
    handleChange,
    labelTitle,
    labelFor,
  } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2 md:w-[50%]">
      <label
        htmlFor={labelFor}
        className="text-[14px] text-primary font-medium"
      >
        {labelTitle}
      </label>
      <TextField
        size="small"
        fullWidth
        required
        type={type}
        id={labelFor}
        name={labelFor}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        label=""
        disabled={disabled}
        InputProps={{
          style: {
            color: "#24272c",
            fontSize: "14px",
            borderRadius: "8px",
            // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#666",
            },
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
          },
        }}
      />
    </div>
  );
}
