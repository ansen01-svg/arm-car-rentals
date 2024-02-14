export default function Header(props) {
  const { car } = props;

  return (
    <div className="w-full text-primary">
      <p className="font-bold text-[20px]">{car.carType}</p>
      <p className="text-[14px]">{car.carName}</p>
    </div>
  );
}
