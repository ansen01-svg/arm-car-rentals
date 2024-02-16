export default function TotalCarsDisplay(props) {
  const { cars } = props;

  return (
    <div className="w-full text-gray1 text-[14px] font-semibold">
      {cars.length > 1 ? (
        <p>{cars.length} cars are available</p>
      ) : (
        <p>{cars.length} car is available</p>
      )}
    </div>
  );
}
