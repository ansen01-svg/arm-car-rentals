import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

export default function CardHeader(props) {
  const { status, cancelBooking } = props;

  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-3">
        <BeenhereOutlinedIcon fontSize="small" />
        <p className="text-[14px] font-medium text-secondary capitalize">
          {status}
        </p>
      </div>
      {status === "Booked" && (
        <div>
          <button
            className="text-[14px] font-medium text-secondary"
            onClick={cancelBooking}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
