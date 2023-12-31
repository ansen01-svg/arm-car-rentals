import InfoText from "./info_text";
import { aboutText1, aboutText2 } from "@/app/utils/constants";

export default function About() {
  return (
    <div className="w-full px-5 py-12 flex flex-col gap-20 md:px-20 md:py-40 md:items-end">
      <InfoText title={aboutText1} />
      <InfoText title={aboutText2} />
    </div>
  );
}
