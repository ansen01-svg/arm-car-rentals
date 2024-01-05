import InfoText from "./info_text";
import { aboutText1, aboutText2, aboutText3 } from "@/app/utils/constants";

export default function About() {
  return (
    <div className="w-full px-5 py-12 flex flex-col gap-20 md:items-center lg:px-40 lg:py-40 lg:items-start">
      <InfoText serialNumber={"1."} title={aboutText1} />
      <InfoText serialNumber={"2."} title={aboutText2} />
      <InfoText serialNumber={"3."} title={aboutText3} />
    </div>
  );
}
