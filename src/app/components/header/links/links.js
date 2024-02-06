import Link from "next/link";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useMediaQuery } from "@mui/material";

export default function Links(props) {
  const { handleClick, user } = props;

  const mobileScreen = useMediaQuery("(max-width:1024px)");

  const tripsLinkContent = mobileScreen ? (
    <LuggageOutlinedIcon
      fontSize="small"
      sx={{ color: "#666", "&:hover": { color: "#1f9990" } }}
    />
  ) : (
    <p className="text-primary text-sm font-medium hover:text-secondary">
      Trips
    </p>
  );

  const userLinkContent = mobileScreen ? (
    <AccountCircleOutlinedIcon
      fontSize="small"
      sx={{ color: "#666", "&:hover": { color: "#1f9990" } }}
    />
  ) : (
    <p className="text-primary text-sm font-medium hover:text-secondary">
      {user ? user.username : "Sign in"}
    </p>
  );

  return (
    <div className="flex justify-center items-center gap-5">
      <Link href={"/trips"}>{tripsLinkContent}</Link>
      <button onClick={handleClick}>{userLinkContent}</button>
    </div>
  );
}
