import { sectionHeaderTitle } from "@/app/utils/constants";

export default function FormHeader() {
  return (
    <div>
      <h1 className="text-2xl text-primary font-bold">{sectionHeaderTitle}</h1>
    </div>
  );
}
