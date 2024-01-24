import Button from "./button";
import Header from "./header";
import PriceBreakup from "./price_breakup";
import Total from "./total";

export default function PriceDetails(props) {
  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 bg-white rounded lg:px-6 lg:py-6">
      <Header />
      <PriceBreakup />
      <div className="w-full h-[1px] bg-slate-200"></div>
      <Total />
      <Button />
    </div>
  );
}
