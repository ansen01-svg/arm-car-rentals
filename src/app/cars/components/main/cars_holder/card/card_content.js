import DetailsHolder from "./details_holder";
import ImgHolder from "./img_holder";

export default function CardContent(props) {
  const { car } = props;

  return (
    <div className="w-full flex flex-row items-center content-center md:flex-row-reverse">
      <DetailsHolder car={car} />
      <ImgHolder url={car.img} />
    </div>
  );
}
