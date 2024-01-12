import Link from "next/link";
import CardContent from "./card_content";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

export default function Card(props) {
  const { car } = props;

  const { mobileScreen } = useWindowWidth();

  return (
    <div className="w-full h-52 px-1 py-1 bg-white rounded shadow relative md:h-56">
      <CardContent car={car} />
      {mobileScreen && (
        <Link
          href={`/cars/${car._id}`}
          className="w-full h-full top-0 left-0 absolute z-50"
        ></Link>
      )}
    </div>
  );
}
