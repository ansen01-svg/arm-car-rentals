import OverviewSection from "./overview/overview";
import PriceSection from "./price/price";

export default function Main(props) {
  return (
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-6 lg:px-20 lg:py-6 lg:flex-row lg:items-start">
      <OverviewSection />
      <PriceSection />
    </div>
  );
}
