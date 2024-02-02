export const initialFormState = {
  pickupDate: null,
  dropoffDate: null,
  pickupTime: null,
  dropoffTime: null,
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
