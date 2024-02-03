export default function TotalCarsDisplay(props) {
  const { cars, dataReady } = props;

  return (
    <div className="w-full text-primary text-[14px] font-bold">
      <p>{dataReady && cars.length} cars are available</p>
    </div>
  );
}
