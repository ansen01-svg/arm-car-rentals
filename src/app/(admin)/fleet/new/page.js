import Header from "./components/header/header";
import SubHeader from "./components/sub_header/sub_header";
import FormHolder from "./components/form_holder/form_holder";
import "../../styles/scrollbar.css";

export const metadata = {
  title: "New row",
};

export default function New() {
  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[55%]">
        <Header title={"New"} />
        <SubHeader title={"New Row"} />
        <FormHolder />
      </div>
    </div>
  );
}
