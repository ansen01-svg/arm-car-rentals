import Image from "next/image";

export default function ImageHolder({ src }) {
  return (
    <div className="w-full">
      <div className="w-[165px] h-[83px] relative">
        <Image
          src={src}
          alt="car-pic"
          fill={true}
          sizes="(max-width:640px) 10vh, 165px"
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
