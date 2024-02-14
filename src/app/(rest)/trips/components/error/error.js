import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

export default function Error() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-[355px] text-[14px] text-primary flex flex-col items-center justify-center gap-2 bg-primary">
      <ReportProblemOutlinedIcon fontSize="large" />
      <p>An error occured while trying to fetch your trips.</p>
      <button
        className="px-4 py-1 bg-secondary text-white rounded hover:bg-hover"
        onClick={handleClick}
      >
        Reload
      </button>
    </div>
  );
}
