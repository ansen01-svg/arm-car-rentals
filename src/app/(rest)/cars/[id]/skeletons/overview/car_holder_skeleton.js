import Skeleton from "@mui/material/Skeleton";

export default function CarHolderSkeleton() {
  return (
    <div className="w-full px-5 py-5 flex flex-row items-start justify-center gap-5 bg-white rounded">
      <div className="flex-1 flex flex-col items-start justify-center gap-2">
        <Skeleton animation="wave" variant="rounded" width={150} height={13} />
        <Skeleton animation="wave" variant="rounded" width={75} height={13} />
      </div>
      <Skeleton animation="wave" variant="rounded" width={168} height={102} />
    </div>
  );
}
