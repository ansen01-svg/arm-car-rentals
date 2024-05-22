import { useMediaQuery } from "@mui/material";
import DesktopFilterSection from "./desktop_filter_section/desktop_filter_section";
import FilterOptionsDisplayHolder from "./filter_options_display_holder/filter_options_display_holder";
import CarsHolder from "./cars_holder/cars_holder";
import TotalCarsDisplay from "./total_cars_display/total_cars_display";

export default function Main(props) {
  const {
    cars,
    sort,
    handleSortChange,
    filters,
    setFilters,
    handleFilterChange,
  } = props;

  const desktopScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-full px-3 flex flex-row items-start justify-center gap-12 lg:px-20 md:py-7">
      {desktopScreen && (
        <FilterSectionWrapper>
          <DesktopFilterSection
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </FilterSectionWrapper>
      )}
      <FiltersAndCarsWrapper
        cars={cars}
        filters={filters}
        sort={sort}
        setFilters={setFilters}
        handleSortChange={handleSortChange}
      />
    </div>
  );
}

function FilterSectionWrapper({ children }) {
  return <div className="w-[18.2vw]">{children}</div>;
}

function FiltersAndCarsWrapper(props) {
  const { cars, sort, handleSortChange, filters, setFilters } = props;

  const filtersArr = [
    ...Object.values(filters)[0],
    ...Object.values(filters)[1],
    ...Object.values(filters)[2],
    ...Object.values(filters)[3],
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-7 flex-1">
      {filtersArr.length > 0 && (
        <FilterOptionsDisplayHolder filters={filters} setFilters={setFilters} />
      )}
      {cars.length > 0 && (
        <TotalCarsDisplay
          carsLength={cars.length}
          value={sort}
          handleChange={handleSortChange}
        />
      )}
      <CarsHolder cars={cars} />
    </div>
  );
}
