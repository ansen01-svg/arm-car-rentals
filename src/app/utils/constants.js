import moment from "moment";

// Home page
// banner form
export const sectionHeaderTitle = "Cheap Car Rentals";
export const address = "ARM Beltola, Guwahati";

// about component
export const aboutText1 = "A trusted platform";
export const aboutText2 = "Unlimited kilometres";
export const aboutText3 = "Book a car in 3 easy steps";

// form dates
export const currentDate = moment().format("DD/MM/YY");
export const futureDate = moment().add(1, "days").format("DD/MM/YY");
export const currentTime = new Date().toLocaleTimeString("en-in", {
  hour: "numeric",
  minute: "numeric",
});

// cars page
export const errorMsge1 =
  "Sorry! We're facing some technical problems at our end.";
export const errorMsge2 = "Please adjust your search and try again.";

// car details page
export const header = "Car rental location";
export const subHeader = "Pick-up & Drop-off";

export const errorMsg1 = "Sorry, we are unable to procceed with your booking.";
export const errorMsg2 = "Retry your booking process again.";
