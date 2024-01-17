export const initialState = {
  availableCars: [],
  showFilterModal: false,
  pickupDate: null,
  dropoffDate: null,
  pickupTime: null,
  dropoffTime: null,
  minDate: null,
  carType: {
    standard: false,
    premium: false,
    luxury: false,
    van: false,
  },
  specifications: {
    manual: false,
    automatic: false,
  },
  price: {
    twoto5k: false,
    fiveto10k: false,
    tenkAndAbove: false,
  },
  capacity: {
    twoToFour: false,
    twoToSix: false,
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_AVAILABLE_CARS":
      return { ...state, availableCars: payload };

    case "SHOW_FILTER_MODAL":
      return { ...state, showFilterModal: payload };

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

    case "SET_CAR_TYPE":
      const { type, value } = payload;
      return {
        ...state,
        carType: { ...state.carType, [type]: value },
      };

    case "SET_SPECIFICATIONS":
      const { specs, specValue } = payload;
      return {
        ...state,
        specifications: {
          ...state.specifications,
          [specs]: specValue,
        },
      };

    case "SET_PRICE":
      const { price, priceValue } = payload;
      return {
        ...state,
        price: { ...state.price, [price]: priceValue },
      };

    case "SET_CAPACITY":
      const { load, loadValue } = payload;
      return {
        ...state,
        capacity: { ...state.capacity, [load]: loadValue },
      };

    default:
      return state;
  }
};
