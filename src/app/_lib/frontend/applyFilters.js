const applyFilters = (dataSet, filters) => {
  // Iterate through each car
  return dataSet.filter((data) => {
    // Check if all filter values are present in the car object
    return filters.every((filter) => {
      // Check if the filter value exists in the car object properties
      return Object.values(data).includes(filter);
    });
  });
};

export default applyFilters;
