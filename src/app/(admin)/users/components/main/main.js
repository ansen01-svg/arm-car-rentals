"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import SearchAndFilterHolder from "@/app/(admin)/components/search_and_filter_holder/search_and_filter_holder";
import FilterButton from "@/app/(admin)/components/search_and_filter_holder/filter_holder";
import TableHolder from "@/app/(admin)/components/table_holder/table_holder";
import PaginationHolder from "@/app/(admin)/components/pagination_holder/pagination_holder";
import DialogBox from "@/app/(admin)/components/dialog/dialog";
import { usersTableHeadValues } from "@/app/utils/arrays";
import applyFilters from "@/app/_lib/frontend/applyFilters";
import { usersFilterFields } from "@/app/utils/arrays";

export default function Main({ users }) {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [availableFilters, setAvailableFilters] = useState(usersFilterFields);

  const router = useRouter();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedItems, setRenderedItems] = useState([]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // get items for each page
  const getItemsForPage = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  }, [currentPage, filteredUsers]);

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
      setFilteredUsers(users);
      return;
    }

    const searchedUser = users.find((user) => user.username === searchTerm);

    if (searchedUser) {
      setFilteredUsers([searchedUser]);
    } else {
      setFilteredUsers([]);
    }
  };

  // handle table row click
  const handleTableRowClick = (id) => {
    router.push(`/users/${id}`);
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
    setAvailableFilters(usersFilterFields);
    setFilters([]);
  };

  // handle cancel button click
  const handleCancelBtnClick = () => {
    setAvailableFilters(usersFilterFields);
    setFilters([]);
    setFilteredUsers(users);
    setCurrentPage(1);
    handleClose();
  };

  // set filters
  const confirmFilters = () => {
    const myFilteredUsers = applyFilters(users, filters);
    setFilteredUsers(myFilteredUsers);
    setCurrentPage(1);
    handleClose();
  };

  return (
    <div className="w-full">
      <SearchAndFilterHolder
        labelFor={"searchTerm"}
        placeholder={"Username"}
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
        filteredValues={filteredUsers}
        tableHeadValues={usersTableHeadValues}
        handleTableRowClick={handleTableRowClick}
      />
      {filteredUsers.length > itemsPerPage && (
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
