export const initialState = {
  availableCars: [],
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
