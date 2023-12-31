import Form from "./form";
import SectionHeader from "../section_header/section_header";

export default function FormWrapper() {
  return (
    <div className="w-full flex flex-col gap-5 bg-white md:px-8 md:py-12 md:rounded">
      <SectionHeader />
      <Form />
    </div>
  );
}
