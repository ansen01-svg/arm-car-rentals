import TextField from "@mui/material/TextField";

export default function SearchHolder(props) {
  const { labelFor, placeholder, value, handleChange, handleSubmit } = props;

  return (
    <div className="w-[130px] lg:w-[200px]">
      <form className="w-full" onSubmit={handleSubmit}>
        <label htmlFor={labelFor} hidden></label>
        <TextField
          size="small"
          fullWidth
          // required
          id={labelFor}
          name={labelFor}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          label=""
          InputProps={{
            style: {
              color: "#24272c",
              fontSize: "14px",
              // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
            },
          }}
          sx={{
            ".MuiInputBase-input": {
              height: "1.2em",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "1px solid #666",
              },
            },
          }}
        />
      </form>
    </div>
  );
}
