import FormWrapper from "../form/form_wrapper";
import Image from "next/image";
import img from "../../assets/bg_img9.jpg";

export default function Banner() {
  return (
    <div className="w-full h-[500px] relative lg:h-[452.44px]">
      <Image src={img} alt="bg" fill={true} className="z-0" />
      <FormWrapper />
    </div>
  );
}
