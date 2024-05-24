import Image from "next/image";

export default function ImageHolder(props) {
  const { src } = props;

  return (
    <div className="w-[165px] h-[83px] relative">
      <Image
        src={src}
        alt="car image"
        fill={true}
        // sizes="(max-width: 640px) 10vh, 165px"
        sizes="165px"
        quality={80}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
