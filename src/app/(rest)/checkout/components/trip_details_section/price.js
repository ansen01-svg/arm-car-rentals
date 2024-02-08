const text = `Here's a breakdown of your price:`;

export default function Price({ total }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <p className="text-sm text-green-700">{text}</p>
      <div className="w-full">
        <div className="text-[14px] text-green-700 flex flex-row items-center justify-between">
          <p>Due today</p>
          <p>Rs. 0</p>
        </div>
        <div className="text-[14px] text-primary flex flex-row items-center justify-between">
          <p>Due at rental counter</p>
          <p>Rs. {total}</p>
        </div>
      </div>
    </div>
  );
}
