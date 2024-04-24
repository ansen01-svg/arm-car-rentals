import Image from "next/image";

export default function Main({ trip }) {
  return (
    <div className="w-full px-3 py-4 flex flex-row items-start justify-center gap-4 bg-primary rounded">
      <ImgHolder />
      <DetailsHolder trip={trip} />
    </div>
  );
}

const src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XV_sJEjoSZ_2KihAsSYHwgHaFP%26pid%3DApi&f=1&ipt=68f1304924a2dd43cb5d299654056c7d29fd8679520e74e87fe68289df4a3223&ipo=images";

function ImgHolder() {
  return (
    <div className="w-[70px] h-[70px] border-[1px] border-slate-200 relative">
      <Image
        src={src}
        alt="ride"
        fill={true}
        sizes="(max-width:100px), 5vw"
        quality={80}
        style={{ objectFit: "fill" }}
      />
    </div>
  );
}

function DetailsHolder({ trip }) {
  const { carId, tripStartDate, itineraryNumber, pickupTime, dropoffTime } =
    trip;

  return (
    <div className="flex-1 text-[12px] flex flex-col items-start justify-start gap-1">
      <p className="font-semibold">
        {carId.type}, {carId.model}
      </p>
      <p>
        Pick up on {tripStartDate}, {pickupTime}
      </p>
      <p>Itinerary number {itineraryNumber}</p>
    </div>
  );
}
