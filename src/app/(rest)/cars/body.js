import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import FilterButtonHolder from "./components/filter_button_holder/filter_button_holder";
import Main from "./components/main/main";
import FilterModal from "./components/filter_modal/filter_modal";

const getOriginalParams = (params) => {
  const myParams = new URLSearchParams(params);

  const pickupDate = myParams.get("pickupDate");
  const dropoffDate = myParams.get("dropoffDate");
  const pickupTime = myParams.get("pickupTime");
  const dropoffTime = myParams.get("pickupTime");

  return {
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
  };
};

export default function Body(props) {
  const { cars } = props;

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [sort, setSort] = useState("Price low to high");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState({
    type: [],
    rate: [],
    capacity: [],
    specification: [],
  });

  const router = useRouter();
  const params = useSearchParams();
  const mobileScreen = useMediaQuery("(max-width:1024px)");

  // filters values array
  const filtersArr = [
    ...Object.values(filters)[0],
    ...Object.values(filters)[1],
    ...Object.values(filters)[2],
    ...Object.values(filters)[3],
  ];

  // sort cars on load
  useEffect(() => {
    if (filteredCars) {
      if (sort === "Price low to high") {
        const sortedCars = filteredCars.sort((a, b) => a.rate - b.rate);
        setFilteredCars(sortedCars);
      } else {
        const sortedCars = filteredCars.sort((a, b) => b.rate - a.rate);
        setFilteredCars(sortedCars);
      }
    }
  }, [filteredCars, sort]);

  // Function to apply filters
  const applyFilters = useCallback(() => {
    let filtered = [...cars];

    // Apply type filter
    if (filters.type.length > 0) {
      filtered = filtered.filter((product) =>
        filters.type.includes(product.type)
      );
    }

    // Apply price filter
    if (filters.rate.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.rate >= parseInt(filters.rate[0].split("-")[0]) &&
          product.rate <= parseInt(filters.rate[0].split("-")[1])
      );
    }

    // Apply capacity filter
    if (filters.capacity.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.capacity >= parseInt(filters.capacity[0].split("-")[0]) &&
          product.capacity <= parseInt(filters.capacity[0].split("-")[1])
      );
    }

    // Apply specifications filter
    if (filters.specification.length > 0) {
      filtered = filtered.filter((product) =>
        filters.specification.includes(product.specification)
      );
    }

    setFilteredCars(filtered);
  }, [
    cars,
    filters.type,
    filters.rate,
    filters.capacity,
    filters.specification,
  ]);

  // // Update URL and apply filters when filters change
  useEffect(() => {
    const searchParams = new URLSearchParams(getOriginalParams(params));
    let url = `/cars?${searchParams.toString()}`;

    // Add or remove type filter from URL
    if (filters.type.length > 0) {
      // searchParams.set("type", filters.type.join(","));
      url = url + `&type=${filters.type.join(",").toString()},`;
    }

    // Add or remove price filter from URL
    if (filters.rate.length > 0) {
      // searchParams.set("price", filters.price.join(","));
      url = url + `&rate=${filters.rate.join(",")},`;
    }

    // Add or remove capacity filter from URL
    if (filters.capacity.length > 0) {
      // searchParams.set("capacity", filters.capacity.join(","));
      url = url + `&capacity=${filters.capacity.join(",")},`;
    }

    // Add or remove specifications filter from URL
    if (filters.specification.length > 0) {
      // searchParams.set("specification", filters.specification.join(","));
      url = url + `&specification=${filters.specification.join(",")},`;
    }

    router.push(url);
    // router.replace(`${pathname}?${searchParams.toString()}`);
    applyFilters();
  }, [filters]);

  // Fetch products initially on load
  // useEffect(() => {
  //   const searchParams = new URLSearchParams(params);

  //   const type = searchParams.get("type");
  //   const price = searchParams.get("price");
  //   const capacity = searchParams.get("capacity");
  //   const specification = searchParams.get("specification");

  //   // if (type) {
  //   //   const priceRange = query.price.split("-").map(Number);
  //   //   handleFilterChange("price", priceRange);
  //   // }

  //   // if (query.specifications) {
  //   //   const specifications = query.specifications.split(",");
  //   //   handleFilterChange("specifications", specifications);
  //   // }
  // }, [params]);

  // handle filters change

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      // Toggle filter value
      if (updatedFilters[filterType].includes(value[0])) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (val) => val !== value[0] && val !== value[1]
        );
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], ...value];
      }

      return updatedFilters;
    });
  };

  // clear filters
  const clearFilters = () => {
    setSort("Price low to high");
    setFilters({
      type: [],
      rate: [],
      capacity: [],
      specification: [],
    });
  };

  // handle sort change
  const handleSortChange = (e) => {
    setSort(e.target.value);
    const sort = e.target.value;

    if (sort === "Price low to high") {
      const sortedCars = filteredCars.sort((a, b) => a.rate - b.rate);
      setFilteredCars(sortedCars);
    } else {
      const sortedCars = filteredCars.sort((a, b) => b.rate - a.rate);
      setFilteredCars(sortedCars);
    }
  };

  return (
    <div>
      {mobileScreen && cars.length > 0 && (
        <FilterButtonHolder setShowFilterModal={setShowFilterModal} />
      )}
      {mobileScreen && showFilterModal && (
        <FilterModal
          sort={sort}
          filters={filters}
          handleSortChange={handleSortChange}
          handleFilterChange={handleFilterChange}
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
          clearFilters={clearFilters}
          disableClearBtn={filtersArr.length < 1}
        />
      )}
      <Main
        cars={filteredCars}
        sort={sort}
        filters={filters}
        setFilters={setFilters}
        handleSortChange={handleSortChange}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
