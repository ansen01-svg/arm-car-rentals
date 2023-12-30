"use client";

import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LinkItem from "./link_item";
import useWindowWidth from "../../../_lib/frontend/hooks/useWindowWidth";

export default function Links() {
  const { mobileScreen } = useWindowWidth();

  const tripsLinkContent = mobileScreen ? (
    <LuggageOutlinedIcon fontSize="small" sx={{ color: "#666" }} />
  ) : (
    <p className="text-primary text-sm font-medium">Trips</p>
  );

  const userLinkContent = mobileScreen ? (
    <AccountCircleOutlinedIcon fontSize="small" sx={{ color: "#666" }} />
  ) : (
    <p className="text-primary text-sm font-medium">Sign in</p>
  );

  return (
    <div className="flex justify-center items-center gap-5">
      <LinkItem content={tripsLinkContent} link="/trips" />
      <LinkItem content={userLinkContent} link="/signin" />
    </div>
  );
}
