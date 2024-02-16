import FormHolder from "@/app/components/form_holder/form_holder";
import Image from "next/image";
import img from "@/app/assets/bg_img10.jpg";

export default function Banner() {
  return (
    <div className="w-full relative md:px-6 md:py-6 lg:px-20 lg:py-12">
      <Image
        src={img}
        alt="bg-pic"
        fill={true}
        priority
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]"></div>
      <FormHolder />
    </div>
  );
}
