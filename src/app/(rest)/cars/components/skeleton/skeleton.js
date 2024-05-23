import { useMediaQuery } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function CarsPageSkeleton() {
  const mobileScreen = useMediaQuery("(max-width:1024px)");
  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full py-3">
      {mobileScreen && (
        <div className="w-full px-3 py-3 lg:px-20 flex justify-center content-center">
          <div className="w-full h-10 bg-white border-[1px] border-slate-200 rounded-lg md:w-80"></div>
        </div>
      )}
      <div className="w-full px-3 flex flex-row items-start justify-center gap-12 lg:px-20 md:py-7">
        {desktopScreen && <FilterSection />}
        <CarsHolder />
      </div>
    </div>
  );
}

function FilterSection() {
  return (
    <div className="w-[20vw] flex flex-col items-start justify-center gap-2">
      <Skeleton animation="wave" variant="rounded" width={150} height={13} />
      <Skeleton animation="wave" variant="rounded" width={75} height={13} />
    </div>
  );
}

function CarsHolder() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="w-full px-1 py-1 bg-white rounded-2xl shadow relative md:h-56 md:hover:shadow-md">
      <div className="w-full px-3 py-5 flex flex-row items-start content-center gap-6 md:flex-row-reverse">
        <div className="flex-1 flex flex-col items-start content-center gap-2">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={150}
            height={13}
          />
          <Skeleton animation="wave" variant="rounded" width={75} height={13} />
        </div>
        <Skeleton animation="wave" variant="rounded" width={120} height={65} />
      </div>
    </div>
  );
}
