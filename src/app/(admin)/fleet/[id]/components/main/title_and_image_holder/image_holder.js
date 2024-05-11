import Image from "next/image";

export default function ImageHolder({ src }) {
  return (
    <div className="w-full">
      <div className="w-[200px] h-[100px] relative">
        <Image
          src={src}
          alt="car-pic"
          fill={true}
          sizes="(max-width:200px), 10vw"
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
