"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import SearchAndFilterHolder from "@/app/(admin)/components/search_and_filter_holder/search_and_filter_holder";
import FilterButton from "@/app/(admin)/components/search_and_filter_holder/filter_holder";
import TableHolder from "@/app/(admin)/components/table_holder/table_holder";
import PaginationHolder from "@/app/(admin)/components/pagination_holder/pagination_holder";
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

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedItems, setRenderedItems] = useState([]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  // get items for each page
  const getItemsForPage = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  }, [currentPage, filteredCars]);

  // generate items to render to each page
  useEffect(() => {
    setRenderedItems(getItemsForPage());
  }, [currentPage, getItemsForPage]);

  // handle prev page button
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // handle next page button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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

  // clear filters
  const clearFilters = () => {
    setAvailableFilters(filterFields);
    setFilters([]);
  };

  // handle cancel button click
  const handleCancelBtnClick = () => {
    setAvailableFilters(filterFields);
    setFilters([]);
    setFilteredCars(cars);
    setCurrentPage(1);
    handleClose();
  };

  // set filters
  const confirmFilters = () => {
    const myFilteredCars = applyFilters(cars, filters);
    setFilteredCars(myFilteredCars);
    setCurrentPage(1);
    handleClose();
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
        <FilterButton
          handleClickOpen={handleClickOpen}
          highlight={filters.length > 0 ? true : false}
        />
      </SearchAndFilterHolder>
      <TableHolder
        filteredValues={filteredCars}
        tableHeadValues={tableHeadValues}
        handleTableRowClick={handleTableRowClick}
      />
      {filteredCars.length > itemsPerPage && (
        <PaginationHolder
          currentPage={currentPage}
          handlePrevBtn={handlePrevPage}
          handleNextBtn={handleNextPage}
          disablePrevBtn={currentPage === 1}
          disableNextBtn={
            currentPage === totalPages || renderedItems.length === 0
          }
        />
      )}
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
