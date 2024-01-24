export default function PolicyHolder(props) {
  return (
    <div
      id="policies"
      className="w-full px-3 py-3 bg-white flex flex-col items-center justify-center gap-3 rounded"
    >
      <div className="w-full font-bold">
        <p>Rental Policies</p>
      </div>
      <div className="w-full px-4 text-primary text-[14px]">
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
