import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import { Header } from "../info_form_section/form_holder/form/user_info";

const headerTitle = "Your booking";

export default function CarDetails({ trip }) {
  const { tripStartDate, tripEndDate, pickupTime, dropoffTime, vehicle } = trip;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-4">
      <Header headerTitle={headerTitle} />
      <div>
        <p className="text-[15px] font-semibold">{vehicle.type}</p>
        <p className="text-[14px] text-primary font-medium">
          ARM Beltola, Guwahati
        </p>
        <div className="text-[12px] text-primary flex flex-row items-center justify-center gap-2 md:text-[14px]">
          <p>
            {tripStartDate}, {pickupTime}
          </p>
          <p>-</p>
          <p>
            {tripEndDate}, {dropoffTime}
          </p>
        </div>
      </div>
      <div className="text-[12px] text-primary flex flex-row items-start justify-center gap-5 md:text-[13px]">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex flex-row items-start justify-center gap-2">
            <PersonOutlineOutlinedIcon fontSize="small" />
            <p>{vehicle.capacity} Passengers</p>
          </div>
          <div className="flex flex-row items-start justify-center gap-2">
            <AcUnitIcon fontSize="small" />
            <p>Air Conditioning</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex flex-row items-start justify-center gap-2">
            <DriveEtaOutlinedIcon fontSize="small" />
            <p>{vehicle.specification}</p>
          </div>
          <div className="flex flex-row items-start justify-center gap-2">
            <LocalGasStationOutlinedIcon fontSize="small" />
            <p>Fuel: fill to full</p>
          </div>
        </div>
      </div>
    </div>
  );
}
