import { Header } from "./user_info";

const headerTitle = "Important information";

export default function ImportantInfo() {
  return (
    <div className="w-full px-3 py-5 bg-white rounded-2xl border-[1px] border-slate-200 relative shadow">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <Header headerTitle={headerTitle} />
        <Ul />
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="w-full text-primary flex flex-col items-center justify-center gap-3">
      <div className="w-full text-[14px] font-medium">
        <p>Rental Policies</p>
      </div>
      <div className="w-full px-4 text-[12px]">
        <ul className="list-disc">
          <li>
            The following rules and restrictions are provided by the car rental
            company.
          </li>
          <li>
            Additional charges or restrictions may apply for drivers under 25 or
            over 70.
          </li>
          <li>
            Charges for refueling, additional drivers, etc. are not included in
            the total price.
          </li>
          <li>
            Geographical restrictions may apply, even for rental contracts that
            feature unlimited mileage. Some car rental companies do not allow
            you to take their vehicles across certain domestic or international
            borders, or may apply an additional charge to do so.
          </li>
          <li>
            Your rental may have mandatory, local insurance requirements that
            result in additional charges at the time of rental.
          </li>
          <li>The total price includes all mandatory taxes and fees.</li>
        </ul>
      </div>
    </div>
  );
}
