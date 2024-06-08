import dayjs from "dayjs";
import getMilliseconds from "./getMilliseconds";

const faultyDateAndTime = (pickupTime, pickupDate) => {
  const time = dayjs(pickupTime).format("hh:mm a");
  const timeInMilliSeconds = getMilliseconds(time, pickupDate);

  return timeInMilliSeconds < Date.now() + 3600;
};

export default faultyDateAndTime;
