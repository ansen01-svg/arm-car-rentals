const text = `Here's a breakdown of your price:`;

export default function Price({ total }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <p className="text-sm text-green">{text}</p>
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <div className="w-full text-[14px] text-green flex flex-row items-center justify-between">
          <p>Due today</p>
          <p>Rs. 0</p>
        </div>
        <div className="w-full text-[14px] text-gray1 flex flex-row items-center justify-between">
          <p>Due at rental counter</p>
          <p>Rs. {total}</p>
        </div>
      </div>
    </div>
  );
}
