import Image from "next/image";

export default function ImgHolder({ url }) {
  return (
    <div className="w-[165px] h-[83px] relative">
      <Image
        src={url}
        alt="car image"
        fill
        // sizes="(max-width:640px) 10vw, 165px"
        sizes="165px"
        quality={80}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
