import Skeleton from "@mui/material/Skeleton";

export default function InfoHolderSkeleton() {
  return (
    <div className="w-full px-3 py-3 flex flex-col items-start justify-center gap-2 bg-white rounded">
      <Skeleton animation="wave" variant="rounded" width={150} height={13} />
      <Skeleton animation="wave" variant="rounded" width={75} height={13} />
    </div>
  );
}
