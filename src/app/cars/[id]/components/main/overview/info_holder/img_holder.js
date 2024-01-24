import Image from "next/image";

const src =
  "https://a.travel-assets.com/travel-assets-manager/cars-messaging-cards-illustrations/calendar_shield.svg";

export default function ImgHolder(props) {
  return (
    <div className="w-[48px] h-[48px] relative">
      <Image
        src={src}
        alt="calendar"
        fill={true}
        sizes="(max-width:200px), 5vw"
        quality={80}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
