import { useState } from "react";
import SearchFieldsHolder from "./search_fields_holder";
import FormHolder from "./form/form_holder";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function SearchOptionsHolder(props) {
  const [showForm, setShowForm] = useState(false);

  const { desktopScreen } = useWindowWidth();

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

  return (
    <div className="w-full bg-white">
      {!desktopScreen && !showForm && (
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
