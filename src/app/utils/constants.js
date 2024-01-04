import moment from "moment";

export const sectionHeaderTitle = "Cheap Car Rentals";

export const aboutText1 = "1. A trusted platform";
export const aboutText2 = "2. Book a car in 3 easy steps";

export const currentDate = moment().format("DD/MM/YY");
export const futureDate = moment().add(1, "days").format("DD/MM/YY");
export const currentTime = new Date().toLocaleTimeString("en-in", {
  hour: "numeric",
  minute: "numeric",
});
