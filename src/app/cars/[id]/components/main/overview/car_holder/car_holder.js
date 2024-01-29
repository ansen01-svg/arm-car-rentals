import DetailsHolder from "./details_holder/details_holder";
import ImageHolder from "./image_holder/image_holder";

export default function CarHolder(props) {
  const { car, date } = props;

  return (
    <div
      id="overview"
      className="w-full px-3 py-3 flex flex-row items-center justify-center gap-5 bg-white rounded"
    >
      <DetailsHolder car={car} date={date} />
      <ImageHolder src={car.img} date={date} />
    </div>
  );
}
