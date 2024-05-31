export default function PolicyHolder() {
  return (
    <div
      id="policies"
      className="w-full px-3 py-3 text-primary bg-white flex flex-col items-center justify-center gap-3 border-[1px] border-slate-200 rounded-2xl shadow"
    >
      <div className="w-full font-bold">
        <h1>Rental Policies</h1>
      </div>
      <div className="w-full px-4 text-[12px]">
        <ul className="list-disc">
          <li>
            You will not be charged anything for the rental since the booking
            was risk-free.
          </li>
          <li>
            Drivers under 25 or over 70 years of age may need to pay an extra
            fee.
          </li>
        </ul>
      </div>
    </div>
  );
}
