import { useMemo } from "react";
import Header from "../../filter_modal/main/header";
import FiltersSection from "../../filter_modal/main/filters_section";

export default function DesktopFilterSection(props) {
  const { filters, handleFilterChange } = props;

  const carTypesData = useMemo(() => {
    return [
      {
        id: 1,
        label: "Standard",
        labelFor: "standard",
        name: "type",
        value: ["Standard"],
      },
      {
        id: 2,
        label: "Premium",
        labelFor: "premium",
        name: "type",
        value: ["Premium"],
      },
      {
        id: 3,
        label: "Luxury",
        labelFor: "luxury",
        name: "type",
        value: ["Luxury"],
      },
      {
        id: 4,
        label: "Van",
        labelFor: "van",
        name: "type",
        value: ["Van"],
      },
    ];
  }, []);

  const carSpecificationsData = useMemo(() => {
    return [
      {
        id: 1,
        label: "Manual",
        labelFor: "manual",
        name: "specification",
        value: ["Manual"],
      },
      {
        id: 2,
        label: "Automatic",
        labelFor: "automatic",
        name: "specification",
        value: ["Automatic"],
      },
    ];
  }, []);

  const carPricesData = useMemo(() => {
    return [
      {
        id: 1,
        label: "2000 to 5000",
        labelFor: "twoto5k",
        name: "price",
        value: ["2000-5000"],
      },
      {
        id: 2,
        label: "5000 to 10000",
        labelFor: "fiveto10k",
        name: "price",
        value: ["5000-10000"],
      },
      {
        id: 3,
        label: "above 10000",
        labelFor: "tenkAndAbove",
        name: "price",
        value: ["10000-50000"],
      },
    ];
  }, []);

  const carCapacityData = useMemo(() => {
    return [
      {
        id: 1,
        label: "2-4 passangers",
        labelFor: "twoToFour",
        name: "capacity",
        value: ["2-4"],
      },
      {
        id: 2,
        label: "5-6 passangers",
        labelFor: "twoToSix",
        name: "capacity",
        value: ["5-6"],
      },
    ];
  }, []);

  return (
    <div className="w-full px-5 flex flex-col items-center justify-center gap-2 border-[1px] border-slate-300 rounded">
      <Header />
      {/* <div className="w-full h-[1px] bg-slate-300"></div> */}
      <div className="w-full">
        <form className="w-full flex flex-col items-center justify-center gap-8">
          <FiltersSection
            filters={filters}
            title="Car Type"
            data={carTypesData}
            handleFilterChange={handleFilterChange}
          />
          <FiltersSection
            filters={filters}
            title="Total price"
            data={carPricesData}
            handleFilterChange={handleFilterChange}
          />
          <FiltersSection
            filters={filters}
            title="Capacity"
            data={carCapacityData}
            handleFilterChange={handleFilterChange}
          />
          <FiltersSection
            filters={filters}
            title="Specifications"
            data={carSpecificationsData}
            handleFilterChange={handleFilterChange}
          />
        </form>
      </div>
    </div>
  );
}
