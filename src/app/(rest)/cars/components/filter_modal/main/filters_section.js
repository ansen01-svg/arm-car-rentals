import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FiltersSection(props) {
  const { title, data, handleChange } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <TitleHolder title={title} />
      <CheckboxesHolder data={data} handleChange={handleChange} />
    </div>
  );
}

function TitleHolder({ title }) {
  return (
    <div className="w-full flex flex-row items-center justify-start">
      <p className="font-bold text-sm text-primary">{title}</p>
    </div>
  );
}

function CheckboxesHolder(props) {
  const { data, handleChange } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <FormGroup>
        {data.map((item) => {
          const { id, label, labelFor, value } = item;
          return (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  size="small"
                  checked={value}
                  value={value}
                  onChange={handleChange}
                />
              }
              label={label}
              id={labelFor}
              name={labelFor}
              sx={{
                ".MuiTypography-root": {
                  fontSize: "14px",
                  color: "rgba(36,39,44,.7)",
                },
              }}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}
