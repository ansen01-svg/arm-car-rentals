import { useMediaQuery } from "@mui/material";
import DesktopFilterSection from "./desktop_filter_section/desktop_filter_section";
import FilterOptionsDisplayHolder from "./filter_options_display_holder/filter_options_display_holder";
import CarsHolder from "./cars_holder/cars_holder";
import TotalCarsDisplay from "./total_cars_display/total_cars_display";
import DesktopFilterSectionSkeleton from "../../skeletons/desktop_filter_section_skeleton";

export default function Main(props) {
  const {
    cars,
    dataReady,
    carType,
    carSpecifications,
    carPrice,
    carCapacity,
    params,
    setParams,
    handleCarTypeValueChange,
    handleSpecificationValueChange,
    handlePriceValueChange,
    handleCapacityValueChange,
  } = props;

  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full px-3 flex flex-row items-start justify-center gap-6 lg:px-20 md:py-4">
      {desktopScreen &&
        (dataReady ? (
          <FilterSectionWrapper>
            <DesktopFilterSection
              carType={carType}
              carSpecifications={carSpecifications}
              carPrice={carPrice}
              carCapacity={carCapacity}
              handleCarTypeValueChange={handleCarTypeValueChange}
              handleSpecificationValueChange={handleSpecificationValueChange}
              handlePriceValueChange={handlePriceValueChange}
              handleCapacityValueChange={handleCapacityValueChange}
            />
          </FilterSectionWrapper>
        ) : (
          <DesktopFilterSectionSkeleton />
        ))}
      <FiltersAndCarsWrapper
        cars={cars}
        dataReady={dataReady}
        params={params}
        setParams={setParams}
      />
    </div>
  );
}

function FilterSectionWrapper({ children }) {
  return <div className="w-[20vw]">{children}</div>;
}

function FiltersAndCarsWrapper(props) {
  const { cars, dataReady, params, setParams } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-7 flex-1">
      {dataReady && params.length > 4 && (
        <FilterOptionsDisplayHolder params={params} setParams={setParams} />
      )}
      <TotalCarsDisplay cars={cars} dataReady={dataReady} />
      <CarsHolder cars={cars} dataReady={dataReady} />
    </div>
  );
}