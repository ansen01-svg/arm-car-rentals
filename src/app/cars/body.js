import FilterButtonHolder from "./components/filter_button_holder/filter_button_holder";
import FilterOptionsHolder from "./components/filter_options_holder/filter_options_holder";
import CarsHolder from "./components/cars_holder/cars_holder";
import useWindowWidth from "../_lib/frontend/hooks/useWindowWidth";

export default function Body(props) {
  const { showFilterModal } = props;

  const { desktopScreen } = useWindowWidth();

  return (
    <div>
      <FilterButtonHolder />
      {(desktopScreen || showFilterModal) && <FilterOptionsHolder />}
      <CarsHolder />
    </div>
  );
}
