import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="w-full px-6 py-4 flex flex-col items-center justify-start gap-8 lg:px-0">
      <div className="w-full h-[60px] px-2 py-2 bg-[rgba(0,0,0,0.11)]">
        <Skeleton
          // variant="rectangular"
          width="30%"
          height={20}
          animation="wave"
          sx={{ background: "white" }}
        />
      </div>
      <div className="w-full h-[350px] flex items-center justify-center gap-4">
        <div className="w-[50%] h-full bg-[rgba(0,0,0,0.11)] flex items-center justify-center">
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ width: "60%", height: "25%", background: "white" }}
          />
        </div>
        <div className="w-[50%] h-full px-2 py-2 bg-[rgba(0,0,0,0.11)] flex flex-col items-start justify-start gap-2">
          <Skeleton
            animation="wave"
            width="60%"
            height={20}
            sx={{ background: "white" }}
          />
          <Skeleton
            animation="wave"
            width="40%"
            height={20}
            sx={{ background: "white" }}
          />
        </div>
      </div>
    </div>
  );
}
