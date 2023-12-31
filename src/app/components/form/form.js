import searchCars from "@/app/actions/search_cars";
import Button from "./form_components/button";
import FieldsHolderWrapper from "./form_components/fields_holder_wrapper";
import LocationHolder from "./form_components/location_holder";

export default function Form() {
  return (
    <form
      action={searchCars}
      className="w-full flex flex-col items-center justify-center gap-5"
    >
      <LocationHolder />
      <FieldsHolderWrapper />
      <Button />
    </form>
  );
}
