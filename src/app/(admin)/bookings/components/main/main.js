"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import SearchAndFilterHolder from "@/app/(admin)/components/search_and_filter_holder/search_and_filter_holder";
import FilterButton from "@/app/(admin)/components/search_and_filter_holder/filter_holder";
import TableHolder from "@/app/(admin)/components/table_holder/table_holder";
import PaginationHolder from "@/app/(admin)/components/pagination_holder/pagination_holder";
import DialogBox from "@/app/(admin)/components/dialog/dialog";
import { bookingsTableHeadValues } from "@/app/utils/arrays";
import applyFilters from "@/app/_lib/frontend/applyFilters";
import { bookingsFilterFields } from "@/app/utils/arrays";

export default function Main({ bookings }) {
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [availableFilters, setAvailableFilters] =
    useState(bookingsFilterFields);

  const router = useRouter();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedItems, setRenderedItems] = useState([]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

  // get items for each page
  const getItemsForPage = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBookings.slice(startIndex, endIndex);
  }, [currentPage, filteredBookings]);

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
      setFilteredBookings(bookings);
      return;
    }

    const searchedBooking = bookings.find(
      (booking) => booking.itineraryNumber === parseInt(searchTerm)
    );

    if (searchedBooking) {
      setFilteredBookings([searchedBooking]);
    } else {
      setFilteredBookings([]);
    }
  };

  // handle table row click
  const handleTableRowClick = (id) => {
    router.push(`/bookings/${id}`);
  };

  // handle available filters button click
  const handleAvailableFiltersBtnClick = (title) => {
    const newAvailableFilters = bookingsFilterFields.filter(
      (filter) => filter !== title
    );
    setAvailableFilters(newAvailableFilters);

    const newFilters = [title];
    setFilters(newFilters);
  };

  // handle appplied filters button click
  const handleAppliedFiltersBtnClick = (title) => {
    setFilters([]);
    setAvailableFilters(bookingsFilterFields);
  };

  // clear filters
  const clearFilters = () => {
    setAvailableFilters(bookingsFilterFields);
    setFilters([]);
  };

  // handle cancel button click
  const handleCancelBtnClick = () => {
    setAvailableFilters(bookingsFilterFields);
    setFilters([]);
    setFilteredBookings(bookings);
    setCurrentPage(1);
    handleClose();
  };

  // set filters
  const confirmFilters = () => {
    const myFilteredBookings = applyFilters(bookings, filters);
    setFilteredBookings(myFilteredBookings);
    setCurrentPage(1);
    handleClose();
  };

  return (
    <div className="w-full">
      <SearchAndFilterHolder
        labelFor={"searchTerm"}
        placeholder={"Itinerary number"}
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
        filteredValues={renderedItems}
        tableHeadValues={bookingsTableHeadValues}
        handleTableRowClick={handleTableRowClick}
      />
      <PaginationHolder
        currentPage={currentPage}
        handlePrevBtn={handlePrevPage}
        handleNextBtn={handleNextPage}
        disablePrevBtn={currentPage === 1}
        disableNextBtn={
          currentPage === totalPages || renderedItems.length === 0
        }
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
