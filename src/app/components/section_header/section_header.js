import { sectionHeaderTitle } from "@/app/utils/constants";

export default function SectionHeader() {
  return (
    <div>
      <h1 className="text-2xl font-bold">{sectionHeaderTitle}</h1>
    </div>
  );
}
