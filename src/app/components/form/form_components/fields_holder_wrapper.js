import FieldsHolder from "./fields_holder";
import DatePickerHolder from "./datepicker_holder";
import TimepickerHolder from "./timepicker_holder";

export default function FieldsHolderWrapper(props) {
  const {
    dateError,
    timeError,
    time1Error,
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    minDate,
    handlePickupDateChange,
    handleDropoffDateChange,
    handlePickupTimeChange,
    handleDropoffTimeChange,
  } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-5 md:flex-row">
      <FieldsHolder>
        <DatePickerHolder
          labelTitle="Pick-up date"
          name="pickUpDate"
          value={pickupDate}
          handleChange={handlePickupDateChange}
          dateError={dateError}
        />
        <DatePickerHolder
          labelTitle="Drop-off date"
          name="dropOffDate"
          value={dropoffDate}
          handleChange={handleDropoffDateChange}
          minDate={minDate}
        />
      </FieldsHolder>
      <FieldsHolder>
        <TimepickerHolder
          labelTitle="Pick-up time"
          value={pickupTime}
          handleChange={handlePickupTimeChange}
          timeError={timeError}
        />
        <TimepickerHolder
          labelTitle="Drop-off time"
          value={dropoffTime}
          handleChange={handleDropoffTimeChange}
          timeError={time1Error}
        />
      </FieldsHolder>
    </div>
  );
}
