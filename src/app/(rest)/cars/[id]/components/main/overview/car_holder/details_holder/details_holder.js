import Details1 from "./details1";
import Details2 from "./details2";
import Header from "./header";
import Label from "@/app/components/label/label";

export default function DetailsHolder(props) {
  const { car } = props;

  return (
    <div className="flex-1 flex flex-col items-start justify-center gap-2">
      <Label />
      <Header car={car} />
      <div className="w-full text-gray1 flex flex-row items-start justify-center">
        <Details1 car={car} />
        <Details2 car={car} />
      </div>
    </div>
  );
}
