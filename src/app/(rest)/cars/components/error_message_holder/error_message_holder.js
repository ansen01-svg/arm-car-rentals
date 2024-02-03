import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { errorMsge1, errorMsge2 } from "@/app/utils/constants";

export default function ErrorMessageHolder() {
  return (
    <div className="w-full h-[275px] px-3 flex flex-col items-center justify-center gap-2">
      <SearchOutlinedIcon fontSize="large" sx={{ color: "#666" }} />
      <p className="font-bold">{errorMsge1}</p>
      <p className="text-primary text-[14px]">{errorMsge2}</p>
    </div>
  );
}
