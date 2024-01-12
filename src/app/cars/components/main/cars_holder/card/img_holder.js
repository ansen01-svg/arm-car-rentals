import Image from "next/image";

export default function ImgHolder({ url }) {
  return (
    <div className="w-[165px] h-[83px] relative">
      <Image
        src={url}
        alt="car-pic"
        fill={true}
        sizes="(max-width:200px), 10vw"
        quality={80}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
