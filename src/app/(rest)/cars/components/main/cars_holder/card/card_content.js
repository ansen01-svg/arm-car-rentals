import DetailsHolder from "./details_holder";
import ImgHolder from "./img_holder";

export default function CardContent(props) {
  const { car, disableBtnId, setDisableBtnId } = props;

  return (
    <div className="w-full flex flex-row items-center content-center md:flex-row-reverse">
      <DetailsHolder
        car={car}
        disableBtnId={disableBtnId}
        setDisableBtnId={setDisableBtnId}
      />
      <ImgHolder url={car.image} />
    </div>
  );
}
