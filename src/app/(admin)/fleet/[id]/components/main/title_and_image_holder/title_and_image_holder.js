import TitleHolder from "./title_holder";
import ImageHolder from "./image_holder";

export default function TitleAndImageHolder(props) {
  const { title, src } = props;

  return (
    <div className="w-[50%] flex flex-col items-center justify-start gap-[150px]">
      <TitleHolder title={title} />
      <ImageHolder src={src} />
    </div>
  );
}
