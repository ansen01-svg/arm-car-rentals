export default function Header(props) {
  const { car } = props;

  return (
    <div className="w-full">
      <p className="font-bold text-[20px]">{car.carType}</p>
      <p className="text-[14px] text-primary">{car.carName}</p>
    </div>
  );
}
