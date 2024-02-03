import Skeleton from "@mui/material/Skeleton";

export default function CarCardContentSkeleton() {
  return (
    <div className="w-full px-3 py-5 flex flex-row items-start content-center gap-6 md:flex-row-reverse">
      <div className="flex-1 flex flex-col items-start content-center gap-2">
        <Skeleton animation="wave" variant="rounded" width={150} height={13} />
        <Skeleton animation="wave" variant="rounded" width={75} height={13} />
      </div>
      <Skeleton animation="wave" variant="rounded" width={120} height={65} />
    </div>
  );
}
