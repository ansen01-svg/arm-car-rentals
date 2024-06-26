import DetailsHolder from "./details_holder/details_holder";
import ImageHolder from "./image_holder/image_holder";

export default function CarHolder(props) {
  const { car } = props;

  return (
    <div
      id="overview"
      className="w-full px-3 py-3 border-[1px] border-slate-200 flex flex-row items-center justify-center gap-5 bg-white rounded-2xl shadow"
    >
      <DetailsHolder car={car} />
      <ImageHolder src={car.image} />
    </div>
  );
}
