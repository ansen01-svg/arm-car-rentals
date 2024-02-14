import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import SearchFieldsHolder from "./search_fields_holder";
import FormHolder from "./form/form_holder";

export default function SearchOptionsHolder(props) {
  const {
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    minDate,
    setParams,
    handlePickupDateChange,
    handleDropoffDateChange,
    handlePickupTimeChange,
    handleDropoffTimeChange,
  } = props;

  const [showForm, setShowForm] = useState(false);

  const mobileScreen = useMediaQuery("(max-width:1024px)");
  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full bg-white shadow-md">
      {mobileScreen && !showForm && (
        <SearchFieldsHolder
          pickupDate={pickupDate}
          dropoffDate={dropoffDate}
          pickupTime={pickupTime}
          dropoffTime={dropoffTime}
          setShowForm={setShowForm}
        />
      )}
      {(desktopScreen || showForm) && (
        <FormHolder
          pickupDate={pickupDate}
          dropoffDate={dropoffDate}
          pickupTime={pickupTime}
          dropoffTime={dropoffTime}
          minDate={minDate}
          setShowForm={setShowForm}
          handlePickupDateChange={handlePickupDateChange}
          handleDropoffDateChange={handleDropoffDateChange}
          handlePickupTimeChange={handlePickupTimeChange}
          handleDropoffTimeChange={handleDropoffTimeChange}
          setParams={setParams}
        />
      )}
    </div>
  );
}
