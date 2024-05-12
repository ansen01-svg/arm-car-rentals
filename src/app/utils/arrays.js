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

export const tableHeadValues = [
  { id: 0, value: "ID" },
  { id: 1, value: "MODEL" },
  { id: 2, value: "TYPE" },
  { id: 3, value: "SPECIFICATION" },
  { id: 4, value: "NUMBER PLATE" },
  { id: 5, value: "COLOR" },
  { id: 6, value: "FUEL TYPE" },
  { id: 7, value: "CAPACITY" },
  { id: 8, value: "RATE" },
  { id: 9, value: "AVAILABILITY STATUS" },
  { id: 10, value: "STATUS" },
];

export const filterFields = [
  "Luxury",
  "Standard",
  "Van",
  "Premium",
  "Manual",
  "Automatic",
  "Petrol",
  "Diesel",
  "Available",
  "Not available",
  "Checked in",
  "Checked out",
];

export const usersTableHeadValues = [
  { id: 0, value: "ID" },
  { id: 1, value: "USERNAME" },
  { id: 2, value: "EMAIL" },
  { id: 3, value: "ROLE" },
  { id: 4, value: "IS VERIFIED" },
  { id: 5, value: "TRIPS" },
];

export const usersFilterFields = ["Admin", "User"];
