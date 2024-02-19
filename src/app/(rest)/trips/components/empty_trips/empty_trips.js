import Link from "next/link";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

export default function EmptyTrips() {
  return (
    <div className="w-full h-full text-[14px] text-gray1 flex flex-col items-center justify-center gap-2">
      <HourglassEmptyOutlinedIcon fontSize="large" />
      <p>You have not made any booking yet.</p>
      <p>
        Book a trip now.
        <Link href={"/"} className="text-secondary underline">
          Home
        </Link>
      </p>
    </div>
  );
}
