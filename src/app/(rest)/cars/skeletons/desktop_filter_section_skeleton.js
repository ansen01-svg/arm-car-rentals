import Skeleton from "@mui/material/Skeleton";

export default function DesktopFilterSectionSkeleton() {
  return (
    <div className="w-[20vw] flex flex-col items-start justify-center gap-2">
      <Skeleton animation="wave" variant="rounded" width={150} height={13} />
      <Skeleton animation="wave" variant="rounded" width={75} height={13} />
    </div>
  );
}
