import Card from "./card";
import { workingsTexts } from "@/app/utils/arrays";

export default function Workings() {
  return (
    <div className="w-full px-5 py-12 md:px-6 md:py-6 lg:px-20 lg:py-12">
      <div className="w-full px-12 py-10 bg-white flex flex-col items-center justify-center gap-12 border-[1px] border-slate-200 rounded-2xl shadow-sm md:px-12 md:py-20">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-center text-primary text-xl font-bold md:text-3xl">
            Who knew car rental could be so simple
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-8 md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap lg:gap-12">
          {workingsTexts.map((textObj) => {
            return (
              <Card
                key={textObj.id}
                icon={textObj.icon}
                title={textObj.title}
                text={textObj.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
