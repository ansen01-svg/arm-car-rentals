import dayjs from "dayjs";
import { defaultPickupDate, defaultDropoffDate } from "@/app/utils/constants";

export const initialFormState = {
  pickupDate: dayjs(defaultPickupDate, "DD/MM/YY"),
  dropoffDate: dayjs(defaultDropoffDate, "DD/MM/YY"),
  pickupTime: dayjs("2023-02-06T09:38"),
  dropoffTime: dayjs("2023-02-06T09:38"),
  minDate: null,
};

export const reducer = (state = initialFormState, { type, payload }) => {
  switch (type) {
    case "SET_PICKUP_DATE":
      return { ...state, pickupDate: payload };

    case "SET_DROPOFF_DATE":
      return { ...state, dropoffDate: payload };

    case "SET_PICKUP_TIME":
      return { ...state, pickupTime: payload };

    case "SET_DROPOFF_TIME":
      return { ...state, dropoffTime: payload };

    case "SET_MINDATE":
      return { ...state, minDate: payload };

    default:
      return state;
  }
};
