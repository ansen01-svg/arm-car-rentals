import { useMemo } from "react";
import Header from "../../filter_modal/main/header";
import FiltersSection from "../../filter_modal/main/filters_section";

export default function DesktopFilterSection(props) {
  const {
    carType,
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
        label: "700 to 1000",
        labelFor: "sevenTo1k",
        value: carPrice.sevenTo1k,
      },
      {
        id: 2,
        label: "1000 to 2000",
        labelFor: "oneto2k",
        value: carPrice.oneto2k,
      },
      {
        id: 3,
        label: "above 2000",
        labelFor: "twokAndAbove",
        value: carPrice.twokAndAbove,
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

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Header />
      <div className="w-full">
        <form className="w-full flex flex-col items-center justify-center gap-8">
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
        </form>
      </div>
    </div>
  );
}
