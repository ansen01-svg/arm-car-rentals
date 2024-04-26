import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

export const carTypes = ["standard", "luxury", "premium", "van"];
export const carSpecifications = ["manual", "automatic"];
export const carPrices = ["twoto5k", "fiveto10k", "tenkAndAbove"];
export const carCapacities = ["twoToFour", "twoToSix"];

export const reservationPageNavLinks = [
  {
    id: 0,
    title: "Overview",
    href: "#Overview",
  },
  {
    id: 1,
    title: "Location",
    href: "#Location",
  },
  {
    id: 2,
    title: "Policies",
    href: "#Policies",
  },
  {
    id: 3,
    title: "Price Summary",
    href: "#Price-summary",
  },
];

export const drawerNavItems = [
  {
    id: 0,
    tittle: "Fleet",
    link: "/fleet",
    icon: <DirectionsCarFilledOutlinedIcon fontSize="medium" />,
  },
  {
    id: 1,
    tittle: "Users",
    link: "/users",
    icon: <PeopleOutlineOutlinedIcon fontSize="medium" />,
  },
  {
    id: 2,
    tittle: "Bookings",
    link: "/bookings",
    icon: <InsertInvitationOutlinedIcon fontSize="medium" />,
  },
];
