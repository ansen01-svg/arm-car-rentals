export default function TotalCarsDisplay(props) {
  const { cars, dataReady } = props;

  return (
    <div className="w-full text-gray1 text-[14px] font-semibold">
      <p>{dataReady && cars.length} cars are available</p>
    </div>
  );
}
