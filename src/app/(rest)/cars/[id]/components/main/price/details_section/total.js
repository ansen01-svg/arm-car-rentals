export default function Total({ totalCost }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <div className="w-full font-bold text-[14px] flex flex-row items-center justify-between">
        <p>Total</p>
        {totalCost && <p>Rs.{totalCost}</p>}
      </div>
      <Wrapper
        title1="Pay at pick-up"
        title2={`${totalCost ? `Rs.${totalCost}` : "Rs.00"}`}
      />
      <Wrapper title1="Pay now" title2="Rs.0" />
    </div>
  );
}

function Wrapper({ title1, title2 }) {
  return (
    <div className="w-full text-[14px] text-primary flex flex-row items-center justify-between">
      <p>{title1}</p>
      <p>{title2}</p>
    </div>
  );
}
