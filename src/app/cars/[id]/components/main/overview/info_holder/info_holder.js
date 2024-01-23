import ImgHolder from "./img_holder";
import Info from "./info";

export default function InfoHolder(props) {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-5 bg-white rounded">
      <ImgHolder />
      <Info />
    </div>
  );
}
