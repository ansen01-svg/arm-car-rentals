"use client";

import { useState } from "react";
import SearchAndFilterHolder from "@/app/(admin)/components/search_and_filter_holder/search_and_filter_holder";
import FilterButton from "@/app/(admin)/components/search_and_filter_holder/filter_holder";
import CarsHolder from "./cars_holder/cars_holder";
import DialogBox from "./dialog/dialog";

const applyFilters = (cars, filters) => {
  // Iterate through each car
  return cars.filter((car) => {
    // Check if all filter values are present in the car object
    return filters.every((filter) => {
      // Check if the filter value exists in the car object properties
      return Object.values(car).includes(filter);
    });
  });
};

export default function Main({ cars }) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle search input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // handle search form submit
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setFilteredCars(cars);
      return;
    }

    const searchedCar = cars.find(
      (car) => car.numberPlate === searchTerm.toUpperCase()
    );

    if (searchedCar) {
      setFilteredCars([searchedCar]);
    } else {
      setFilteredCars([]);
    }
  };

  // set filters
  const confirmFilters = () => {
    const myFilteredCars = applyFilters(cars, filters);
    setFilteredCars(myFilteredCars);
    handleClose();
  };

  // set initial cars
  const setInitialCarsArray = () => {
    setFilteredCars(cars);
  };

  return (
    <div className="w-full">
      <SearchAndFilterHolder
        labelFor={"searchTerm"}
        placeholder={"Number plate"}
        value={searchTerm}
        handleChange={handleChange}
        handleSubmit={handleSearchFormSubmit}
      >
        <FilterButton handleClickOpen={handleClickOpen} />
      </SearchAndFilterHolder>
      <CarsHolder filteredCars={filteredCars} />
      <DialogBox
        open={open}
        handleClose={handleClose}
        filters={filters}
        setFilters={setFilters}
        confirmFilters={confirmFilters}
        setInitialCarsArray={setInitialCarsArray}
      />
    </div>
  );
}
