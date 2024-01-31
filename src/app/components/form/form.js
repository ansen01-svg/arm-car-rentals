import Button from "./form_components/button";
import FieldsHolderWrapper from "./form_components/fields_holder_wrapper";
import LocationHolder from "./form_components/location_holder";

export default function Form(props) {
  const {
    dateError,
    timeError,
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    minDate,
    handlePickupDateChange,
    handleDropoffDateChange,
    handlePickupTimeChange,
    handleDropoffTimeChange,
    handleSubmit,
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-5"
    >
      <LocationHolder />
      <FieldsHolderWrapper
        dateError={dateError}
        timeError={timeError}
        pickupDate={pickupDate}
        dropoffDate={dropoffDate}
        pickupTime={pickupTime}
        dropoffTime={dropoffTime}
        minDate={minDate}
        handlePickupDateChange={handlePickupDateChange}
        handleDropoffDateChange={handleDropoffDateChange}
        handlePickupTimeChange={handlePickupTimeChange}
        handleDropoffTimeChange={handleDropoffTimeChange}
      />
      <Button />
    </form>
  );
}
