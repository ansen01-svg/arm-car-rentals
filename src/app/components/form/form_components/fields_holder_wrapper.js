import FieldsHolder from "./fields_holder";
import Field from "./field";

export default function FieldsHolderWrapper() {
  return (
    <div className="w-full flex items-center justify-center gap-3 md:gap-5">
      <FieldsHolder>
        <Field></Field>
        <Field></Field>
      </FieldsHolder>
      <FieldsHolder>
        <Field></Field>
        <Field></Field>
      </FieldsHolder>
    </div>
  );
}
