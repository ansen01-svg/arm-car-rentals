import dayjs from "dayjs";
import LocationHolder from "./location_holder";
import FieldsHolder from "./fields_holder";
import DatePickerHolder from "@/app/components/form/form_components/datepicker_holder";
import TimepickerHolder from "@/app/components/form/form_components/timepicker_holder";
import Button from "./button";

export default function FormHolder(props) {
  const {
    pickupDate,
    dropoffDate,
    pickupTime,
    dropoffTime,
    minDate,
    setShowForm,
    handlePickupDateChange,
    handleDropoffDateChange,
    handlePickupTimeChange,
    handleDropoffTimeChange,
    setParams,
  } = props;

  // search cars form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickupDate || !dropoffDate || !pickupTime || !dropoffTime) {
      return;
    }

    // update params array
    const newParamsArray = [
      { pickupDate: dayjs(pickupDate) },
      { dropoffDate: dayjs(dropoffDate) },
      { pickupTime: dayjs(pickupTime) },
      { dropoffTime: dayjs(dropoffTime) },
    ];
    setParams(newParamsArray);

    // close form
    setShowForm(false);
  };

  return (
    <div className="w-full bg-inherit">
      <form
        onSubmit={handleSubmit}
        className="w-full px-3 py-6 flex flex-col items-center content-center gap-3 lg:px-20 lg:py-3 lg:flex-row"
      >
        <LocationHolder />
        <FieldsHolder>
          <DatePickerHolder
            labelTitle={"Pick-up Date"}
            value={dayjs(pickupDate)}
            handleChange={handlePickupDateChange}
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
          />
          <TimepickerHolder
            labelTitle={"Drop-off Time"}
            value={dayjs(dropoffTime)}
            handleChange={handleDropoffTimeChange}
          />
        </FieldsHolder>
        <Button />
      </form>
    </div>
  );
}
