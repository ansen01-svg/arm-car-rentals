export default function PriceBreakup(props) {
  const { price, days, totalCost } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <Header />
      <Breakup price={price} days={days} totalCost={totalCost} />
    </div>
  );
}

function Header() {
  return (
    <div className="w-full">
      <h2 className="text-[14px] font-bold">Pay at pick-up</h2>
    </div>
  );
}

function Breakup(props) {
  const { price, days, totalCost } = props;

  return (
    <div className="w-full text-[14px] text-gray1 flex flex-col items-center justify-center gap-3">
      <div className="w-full flex flex-row items-start justify-between">
        <p>
          Car rental fee x {days && <span>{days}</span>}{" "}
          {+days > 1 ? "days" : "day"} <br />
          <span className="text-xs">
            {price && <span>Rs.{price}</span>} per day
          </span>
        </p>
        {totalCost && <p>Rs.{totalCost}</p>}
      </div>
      <div className="w-full flex flex-row items-start justify-between">
        <p>Taxes and fees</p>
        <p>included</p>
      </div>
    </div>
  );
}
