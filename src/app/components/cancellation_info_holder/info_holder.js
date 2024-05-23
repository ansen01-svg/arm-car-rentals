import ImgHolder from "./img_holder";
import Info from "./info";

export default function InfoHolder(props) {
  return (
    <div className="w-full px-3 py-3 flex flex-row items-start justify-center gap-3 border-[1px] border-slate-200 bg-white rounded-lg shadow">
      <ImgHolder />
      <Info {...props} />
    </div>
  );
}
