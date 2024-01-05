import Form from "./form";
import SectionHeader from "../section_header/section_header";

export default function FormWrapper() {
  return (
    <div className="w-full h-full absolute top-0 left-0 px-6 py-14 z-30 flex flex-col gap-5 bg-white md:left-6 md:top-6 md:w-[94%] md:min-w-[94%] md:h-[450px] md:rounded lg:top-10 lg:left-20 lg:w-[87vw] lg:min-w-[87vw] lg:h-[375px] lg:px-8 lg:py-10 lg:rounded">
      <SectionHeader />
      <Form />
    </div>
  );
}
