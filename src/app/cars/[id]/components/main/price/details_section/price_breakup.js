export default function PriceBreakup(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <Header />
      <Breakup />
    </div>
  );
}

function Header() {
  return (
    <div className="w-full">
      <p className="text-[14px] font-bold">Pay at pick-up</p>
    </div>
  );
}

function Breakup() {
  return (
    <div className="w-full text-[14px] text-primary flex flex-col items-center justify-center gap-3">
      <div className="w-full flex flex-row items-start justify-between">
        <p>
          Car rental fee x 2 days <br />{" "}
          <span className="text-xs">Rs.3000 per day</span>
        </p>
        <p>Rs.6000</p>
      </div>
      <div className="w-full flex flex-row items-start justify-between">
        <p>Taxes and fees</p>
        <p>included</p>
      </div>
    </div>
  );
}
