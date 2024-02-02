import { useMemo } from "react";
import Header from "./header";
import FiltersSection from "./filters_section";
import Button from "./button";

export default function Main(props) {
  const {
    carType,
    setShowFilterModal,
    carSpecifications,
    carPrice,
    carCapacity,
    handleCarTypeValueChange,
    handleSpecificationValueChange,
    handlePriceValueChange,
    handleCapacityValueChange,
  } = props;

  const carTypesData = useMemo(() => {
    return [
      {
        id: 1,
        label: "Standard",
        labelFor: "standard",
        value: carType.standard,
      },
      {
        id: 2,
        label: "Premium",
        labelFor: "premium",
        value: carType.premium,
      },
      {
        id: 3,
        label: "Luxury",
        labelFor: "luxury",
        value: carType.luxury,
      },
      {
        id: 4,
        label: "Van",
        labelFor: "van",
        value: carType.van,
      },
    ];
  }, [carType]);

  const carSpecificationsData = useMemo(() => {
    return [
      {
        id: 1,
        label: "Manual",
        labelFor: "manual",
        value: carSpecifications.manual,
      },
      {
        id: 2,
        label: "Automatic",
        labelFor: "automatic",
        value: carSpecifications.automatic,
      },
    ];
  }, [carSpecifications]);

  const carPricesData = useMemo(() => {
    return [
      {
        id: 1,
        label: "2000 to 5000",
        labelFor: "twoto5k",
        value: carPrice.twoto5k,
      },
      {
        id: 2,
        label: "5000 to 10000",
        labelFor: "fiveto10k",
        value: carPrice.fiveto10k,
      },
      {
        id: 3,
        label: "above 10000",
        labelFor: "tenkAndAbove",
        value: carPrice.tenkAndAbove,
      },
    ];
  }, [carPrice]);

  const carCapacityData = useMemo(() => {
    return [
      {
        id: 1,
        label: "2-4 passangers",
        labelFor: "twoToFour",
        value: carCapacity.twoToFour,
      },
      {
        id: 2,
        label: "2-6 passangers",
        labelFor: "twoToSix",
        value: carCapacity.twoToSix,
      },
    ];
  }, [carCapacity]);

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
            title="Car Type"
            data={carTypesData}
            handleChange={handleCarTypeValueChange}
          />
          <FiltersSection
            title="Total price"
            data={carPricesData}
            handleChange={handlePriceValueChange}
          />
          <FiltersSection
            title="Capacity"
            data={carCapacityData}
            handleChange={handleCapacityValueChange}
          />
          <FiltersSection
            title="Specifications"
            data={carSpecificationsData}
            handleChange={handleSpecificationValueChange}
          />
          <Button />
        </form>
      </div>
    </div>
  );
}
