import Header from "./header";
import DateAndTimeHolder from "./date_and_time_holder";

export default function Content(props) {
  const { dates, time } = props;

  return (
    <div className="w-full text-primary flex flex-col items-center justify-center gap-2">
      <Header />
      <DateAndTimeHolder dates={dates} time={time} />
    </div>
  );
}
