import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const text1 = `Sorry! We're facing some technical problems at our end.`;
const text2 = "Please adjust your search and try again.";

export default function ErrorMessageHolder() {
  return (
    <div className="w-full h-[calc(100vh-64px-80.44px-224px)] px-3 flex flex-col items-center justify-center gap-2">
      <SearchOutlinedIcon fontSize="large" sx={{ color: "#666" }} />
      <p className="font-bold">{text1}</p>
      <p className="text-primary text-[14px]">{text2}</p>
    </div>
  );
}
