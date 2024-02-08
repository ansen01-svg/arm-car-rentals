import InfoHolder from "@/app/components/cancellation_info_holder/info_holder";
import FormHolder from "./form_holder/form_holder";

const title1 = "Free cancellation if plans change";
const title2 = "Cancel free of charge anytime. Reserve now and pay at pick up.";

export default function InfoFormSection(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 md:w-[65%]">
      <InfoHolder title1={title1} title2={title2} />
      <FormHolder {...props} />
    </div>
  );
}
