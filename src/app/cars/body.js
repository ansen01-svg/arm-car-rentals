import FilterButtonHolder from "./components/filter_button_holder/filter_button_holder";
import Main from "./components/main/main";
import FilterModal from "./components/filter_modal/filter_modal";
import useWindowWidth from "../_lib/frontend/hooks/useWindowWidth";

export default function Body(props) {
  const {
    cars,
    pickupDate,
    dispatch,
    showFilterModal,
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

  const { mobileScreen } = useWindowWidth();

  const dataReady = pickupDate;

  return (
    <div>
      {dataReady && mobileScreen && <FilterButtonHolder dispatch={dispatch} />}
      {mobileScreen && showFilterModal && (
        <FilterModal
          showFilterModal={showFilterModal}
          dispatch={dispatch}
          params={params}
          setParams={setParams}
          carType={carType}
          carSpecifications={carSpecifications}
          carPrice={carPrice}
          carCapacity={carCapacity}
          handleCarTypeValueChange={handleCarTypeValueChange}
          handleSpecificationValueChange={handleSpecificationValueChange}
          handlePriceValueChange={handlePriceValueChange}
          handleCapacityValueChange={handleCapacityValueChange}
        />
      )}
      <Main
        cars={cars}
        dataReady={dataReady}
        carType={carType}
        carSpecifications={carSpecifications}
        carPrice={carPrice}
        carCapacity={carCapacity}
        params={params}
        setParams={setParams}
        handleCarTypeValueChange={handleCarTypeValueChange}
        handleSpecificationValueChange={handleSpecificationValueChange}
        handlePriceValueChange={handlePriceValueChange}
        handleCapacityValueChange={handleCapacityValueChange}
      />
    </div>
  );
}
