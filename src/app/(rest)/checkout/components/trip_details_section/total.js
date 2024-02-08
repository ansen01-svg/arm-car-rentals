export default function Total({ total }) {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between">
        <p className="text-[14px] text-primary">Total</p>
        <p className="text-[15px] font-semibold">Rs. {total}</p>
      </div>
    </div>
  );
}
