import TextField from "@mui/material/TextField";

export default function SearchHolder(props) {
  const { searchTerm, placeholder, handleSubmit } = props;

  return (
    <div className="w-[130px] lg:w-[200px]">
      <form className="w-full">
        <TextField
          size="small"
          fullWidth
          required
          // type={type}
          // id={labelFor}
          // name={labelFor}
          // value={value}
          placeholder={placeholder}
          // onChange={(e) => handleChange(e.target.value)}
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
                // border: "1px solid #f75d34",
              },
            },
          }}
        />
      </form>
    </div>
  );
}
