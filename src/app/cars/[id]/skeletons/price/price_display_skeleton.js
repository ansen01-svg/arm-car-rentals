import Skeleton from "@mui/material/Skeleton";

export default function PriceDisplaySkeleton() {
  return (
    <div className="w-full h-32 px-3 py-3 flex flex-col items-start justify-start gap-2 bg-white rounded lg:px-6 lg:py-6">
      <Skeleton animation="wave" variant="rounded" width={150} height={13} />
      <Skeleton animation="wave" variant="rounded" width={75} height={13} />
    </div>
  );
}
