"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchAndFilterHolder from "@/app/(admin)/components/search_and_filter_holder/search_and_filter_holder";
import FilterButton from "@/app/(admin)/components/search_and_filter_holder/filter_holder";
import TableHolder from "@/app/(admin)/components/table_holder/table_holder";
import DialogBox from "@/app/(admin)/components/dialog/dialog";
import { tableHeadValues } from "@/app/utils/arrays";
import applyFilters from "@/app/_lib/frontend/applyFilters";
import { filterFields } from "@/app/utils/arrays";

export default function Main({ cars }) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [availableFilters, setAvailableFilters] = useState(filterFields);

  const router = useRouter();
  console.log(cars, filteredCars);
  // open dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // close dialog
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

  // handle table row click
  const handleTableRowClick = (id) => {
    router.push(`/fleet/${id}`);
  };

  // set filters
  const confirmFilters = () => {
    const myFilteredCars = applyFilters(cars, filters);
    setFilteredCars(myFilteredCars);
    handleClose();
  };

  // handle available filters button click
  const handleAvailableFiltersBtnClick = (title) => {
    const newAvailableFilters = availableFilters.filter(
      (filter) => filter !== title
    );
    setAvailableFilters(newAvailableFilters);

    const newFilters = [...filters, title];
    setFilters(newFilters);
  };

  // handle appplied filters button click
  const handleAppliedFiltersBtnClick = (title) => {
    const newFilters = filters.filter((filter) => filter !== title);
    setFilters(newFilters);

    const newAvailableFilters = [...availableFilters, title];
    setAvailableFilters(newAvailableFilters);
  };

  // handle cancel button click
  const handleCancelBtnClick = () => {
    setAvailableFilters(filterFields);
    setFilters([]);
    setFilteredCars(cars);
    handleClose();
  };

  // clear filters
  const clearFilters = () => {
    setAvailableFilters(filterFields);
    setFilters([]);
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
      <TableHolder
        filteredValues={filteredCars}
        tableHeadValues={tableHeadValues}
        handleTableRowClick={handleTableRowClick}
      />
      <DialogBox
        open={open}
        handleClose={handleClose}
        filters={filters}
        confirmFilters={confirmFilters}
        availableFilters={availableFilters}
        handleAppliedFiltersBtnClick={handleAppliedFiltersBtnClick}
        handleCancelBtnClick={handleCancelBtnClick}
        handleAvailableFiltersBtnClick={handleAvailableFiltersBtnClick}
        clearFilters={clearFilters}
      />
    </div>
  );
}
