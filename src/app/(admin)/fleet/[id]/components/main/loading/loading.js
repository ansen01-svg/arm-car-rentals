import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="w-full px-6 py-20 flex flex-col items-center justify-start gap-8 lg:px-0">
      <CircularProgress size={30} thickness={4} />
    </div>
  );
}
