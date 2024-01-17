const getFilters = (params) => {
  let filters = [];

  const carTypes = params.find((param) => Object.keys(param)[0] === "carType");

  const prices = params.find((param) => Object.keys(param)[0] === "price");

  const capacity = params.find((param) => Object.keys(param)[0] === "capacity");

  const specs = params.find(
    (param) => Object.keys(param)[0] === "specifications"
  );

  if (carTypes) {
    carTypes.carType.forEach((type) => {
      filters.push({ id: type, name: type });
    });
  }

  if (prices) {
    prices.price.forEach((type) => {
      filters.push({ id: type, name: type });
    });
  }

  if (specs) {
    specs.specifications.forEach((type) => {
      filters.push({ id: type, name: type });
    });
  }

  if (capacity) {
    capacity.capacity.forEach((type) => {
      filters.push({ id: type, name: type });
    });
  }

  return filters;
};

export default getFilters;
