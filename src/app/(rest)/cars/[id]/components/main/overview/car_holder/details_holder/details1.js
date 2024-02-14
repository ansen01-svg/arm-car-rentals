import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";

export default function Details1({ car }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <Field
        icon={<PersonOutlineOutlinedIcon fontSize="small" />}
        title={`${car.capacity} Passengers`}
      />
      <Field icon={<AcUnitIcon fontSize="small" />} title="Air Conditioning" />
      <Field
        icon={<LocalGasStationOutlinedIcon fontSize="small" />}
        title="Fuel: full to full"
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
