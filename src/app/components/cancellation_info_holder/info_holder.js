import ImgHolder from "./img_holder";
import Info from "./info";

export default function InfoHolder(props) {
  return (
    <div className="w-full px-3 py-3 flex flex-row items-start justify-center gap-3 bg-white rounded shadow">
      <ImgHolder />
      <Info {...props} />
    </div>
  );
}
