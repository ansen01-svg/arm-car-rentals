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

export const typeValues = [
  { id: 0, value: "Standard" },
  { id: 1, value: "Van" },
  { id: 2, value: "Luxury" },
  { id: 3, value: "Premium" },
];

export const specsValues = [
  { id: 0, value: "Manual" },
  { id: 1, value: "Automatic" },
];

export const fuelTypeValues = [
  { id: 0, value: "Petrol" },
  { id: 1, value: "Diesel" },
  { id: 2, value: "Electric" },
];
