import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="w-full px-6 py-4 flex flex-col items-center justify-start gap-10 lg:px-0">
      <div className="w-full">
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: "100%", height: "50px" }}
        />
      </div>
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="w-[50%] h-[80px] flex items-center justify-center">
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ width: "60%", height: "100%" }}
          />
        </div>
        <div className="w-[50%] h-full flex flex-col items-start justify-start gap-3">
          <Skeleton animation="wave" width="70%" height={25} />
          <Skeleton animation="wave" width="50%" height={25} />
        </div>
      </div>
    </div>
  );
}
