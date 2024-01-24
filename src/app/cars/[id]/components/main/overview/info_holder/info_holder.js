import ImgHolder from "./img_holder";
import Info from "./info";

export default function InfoHolder(props) {
  return (
    <div className="w-full px-3 py-3 flex flex-row items-center justify-center gap-3 bg-white rounded">
      <ImgHolder />
      <Info />
    </div>
  );
}
