export default function Info(props) {
  const { title1, title2 } = props;

  return (
    <div className="flex-1">
      <h1 className="font-bold text-[14px]">{title1}</h1>
      <p className="text-primary  text-[12px] md:text-[14px]">{title2}</p>
    </div>
  );
}
