import TextField from "@mui/material/TextField";

export default function Field(props) {
  const { value, handleChange, label, type, name } = props;

  return (
    <div className="w-full h-[60px] px-4 pt-1 border-[1px] border-slate-200 rounded-lg">
      <TextField
        id={name}
        variant="standard"
        size="small"
        fullWidth
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
          style: {
            fontSize: "15px",
            // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
          },
        }}
        sx={{
          ".MuiFormLabel-root": {
            fontSize: "15px",
            // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
            color: "#666",
            fontWeight: 600,
          },
          "& label": {
            "&.Mui-focused": {
              color: "#666",
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
