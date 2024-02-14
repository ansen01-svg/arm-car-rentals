import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";

export default function Details2({ car }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <Field icon={<DriveEtaOutlinedIcon fontSize="small" />} title="4 Doors" />
      <Field
        icon={<DriveEtaOutlinedIcon fontSize="small" />}
        title={car.specification}
      />
    </div>
  );
}

function Field({ icon, title }) {
  return (
    <div className="text-[12px] flex flex-row items-center justify-center gap-2 md:text-[14px]">
      {icon}
      <p>{title}</p>
    </div>
  );
}
