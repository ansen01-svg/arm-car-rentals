import dayjs from "dayjs";
import LocationHolder from "./location_holder";
import FieldsHolder from "./fields_holder";
import DatePickerHolder from "@/app/components/form/form_components/datepicker_holder";
import TimepickerHolder from "@/app/components/form/form_components/timepicker_holder";
import Button from "./button";

export default function Form(props) {
  const {
    disabled,
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
    handleSubmit,
  } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center content-center gap-3 lg:flex-row"
    >
      <LocationHolder />
      <FieldsHolder>
        <DatePickerHolder
          labelTitle={"Pick-up Date"}
          value={dayjs(pickupDate)}
          handleChange={handlePickupDateChange}
          dateError={dateError}
        />
        <DatePickerHolder
          labelTitle={"Drop-off Date"}
          value={dayjs(dropoffDate)}
          handleChange={handleDropoffDateChange}
          minDate={minDate}
        />
      </FieldsHolder>
      <FieldsHolder>
        <TimepickerHolder
          labelTitle={"Pick-up Time"}
          value={dayjs(pickupTime)}
          handleChange={handlePickupTimeChange}
          timeError={timeError}
        />
        <TimepickerHolder
          labelTitle={"Drop-off Time"}
          value={dayjs(dropoffTime)}
          handleChange={handleDropoffTimeChange}
          timeError={time1Error}
        />
      </FieldsHolder>
      <Button disabled={disabled} />
    </form>
  );
}
