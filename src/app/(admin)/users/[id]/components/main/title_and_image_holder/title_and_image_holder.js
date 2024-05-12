import TitleHolder from "./title_holder";
import ImageHolder from "./image_holder";

export default function TitleAndImageHolder(props) {
  const { user } = props;

  return (
    <div className="w-[50%] flex flex-col items-center justify-start gap-[150px]">
      <TitleHolder title={user[0].username} />
      <ImageHolder />
    </div>
  );
}
