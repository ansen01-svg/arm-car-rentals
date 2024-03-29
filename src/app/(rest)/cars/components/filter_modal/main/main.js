import { useMemo } from "react";
import Header from "./header";
import FiltersSection from "./filters_section";
import Button from "./button";

export default function Main(props) {
  const { filters, setShowFilterModal, handleFilterChange } = props;

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

  // close filter modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFilterModal(false);
  };

  return (
    <div className="w-full h-[calc(890px-128px)] px-4 flex flex-col items-center justify-start gap-2 overflow-y-auto">
      <Header />
      <div className="w-full">
        <form
          className="w-full flex flex-col items-center justify-center gap-8"
          onSubmit={handleSubmit}
        >
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
          <Button />
        </form>
      </div>
    </div>
  );
}
