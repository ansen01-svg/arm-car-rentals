import { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const EditableTextField = forwardRef(function EditableTextField(props, ref) {
  const { isEditing, value, handleChange, labelTitle, labelFor } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <label htmlFor={labelFor} className="text-[13px] text-gray2 font-medium">
        {labelTitle}
      </label>
      <TextField
        size="small"
        fullWidth
        required
        label=""
        disabled={!isEditing ? true : false}
        id={labelFor}
        name={labelFor}
        value={value}
        onChange={handleChange}
        inputRef={(input) => input && input.focus()}
        InputProps={{
          style: {
            color: "#24272c",
            fontSize: "13px",
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "1px solid #666",
            },
          },
        }}
      />
    </div>
  );
});

export default EditableTextField;
