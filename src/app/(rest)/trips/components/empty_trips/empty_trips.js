import Link from "next/link";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

export default function EmptyTrips() {
  return (
    <div className="w-full h-[355px] text-[14px] text-primary flex flex-col items-center justify-center gap-2 bg-primary">
      <HourglassEmptyOutlinedIcon fontSize="large" />
      <p>You have not made any booking yet.</p>
      <p>
        Book a trip now.{" "}
        <Link href={"/"} className="text-secondary underline">
          Home
        </Link>
      </p>
    </div>
  );
}
