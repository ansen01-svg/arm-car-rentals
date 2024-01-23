import Header from "./header";
import DateAndTimeHolder from "./date_and_time_holder";

export default function Content() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Header />
      <DateAndTimeHolder />
    </div>
  );
}
