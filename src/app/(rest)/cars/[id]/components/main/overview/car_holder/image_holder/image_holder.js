import Image from "next/image";

export default function ImageHolder(props) {
  const { src } = props;

  return (
    <div className="w-[168px] h-[102px] relative lg:w-[202px]">
      <Image
        src={src}
        alt="car image"
        fill={true}
        sizes="(max-width: 640px) 10vw, 168px"
        quality={80}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
