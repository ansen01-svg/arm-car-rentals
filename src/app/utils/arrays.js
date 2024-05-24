import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

export const faqsTexts = [
  {
    id: 1,
    title: "Is there a speed limit?",
    text: "Car-lease.com allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Car-lease.com strictly advises to follow local speed limits.",
  },
  {
    id: 2,
    title: "Can I extend/ cancel/ modify my booking?",
    text: "Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy.",
  },
  {
    id: 3,
    title: "Booking criteria & documents?",
    text: "Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for “Light Motor Vehicles”, which is min. 1 year old at the time of starting the trip.",
  },
];

export const workingsTexts = [
  {
    id: 1,
    title: "Sign up",
    icon: <LoginIcon fontSize="large" sx={{ color: "#2176ae" }} />,
    text: "Create an account for a seamless experience.",
  },
  {
    id: 2,
    title: "Select car",
    icon: (
      <DirectionsCarFilledOutlinedIcon
        fontSize="large"
        sx={{ color: "#2176ae" }}
      />
    ),
    text: "Choose your desired car from our fleet.",
  },
  {
    id: 3,
    title: "Finalize booking",
    icon: <AssignmentOutlinedIcon fontSize="large" sx={{ color: "#2176ae" }} />,
    text: "Add your informations and complete your booking.",
  },
  {
    id: 4,
    title: "Pick up",
    icon: <LocationOnOutlinedIcon fontSize="large" sx={{ color: "#2176ae" }} />,
    text: "Pick up your car from our address.",
  },
];

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
  { id: 5, value: "Phone number" },
  { id: 6, value: "TRIPS" },
];

export const usersFilterFields = ["Admin", "User"];

export const bookingsTableHeadValues = [
  { id: 0, value: "ID" },
  { id: 1, value: "TRIP START" },
  { id: 2, value: "TRIP END" },
  { id: 3, value: "VEHICLE NUMBER" },
  { id: 4, value: "USER ID" },
  { id: 5, value: "EMAIL" },
  { id: 6, value: "STATUS" },
  { id: 7, value: "ITINERARY NUMBER" },
];

export const bookingsFilterFields = ["Booked", "Cancelled", "Completed"];
