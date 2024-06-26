import Header from "./header";
import Content from "./content/content";

export default function LocationHolder(props) {
  const { car, dates, time } = props;

  return (
    <div
      id="location"
      className="w-full px-3 py-3 bg-white flex flex-col items-center justify-center gap-4 border-[1px] border-slate-200 rounded-2xl shadow"
    >
      <Header />
      <Content dates={dates} time={time} />
    </div>
  );
}
