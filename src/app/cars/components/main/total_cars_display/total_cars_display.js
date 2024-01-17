export default function TotalCarsDisplay({ cars }) {
  return (
    <div className="w-full text-primary text-[14px] font-bold">
      <p>{cars.length} cars are available</p>
    </div>
  );
}
