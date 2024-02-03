import { useState, useEffect, useReducer } from "react";
import { useMediaQuery } from "@mui/material";
import { initialState, reducer } from "./reducers/body_reducer";
import FilterButtonHolder from "./components/filter_button_holder/filter_button_holder";
import Main from "./components/main/main";
import FilterModal from "./components/filter_modal/filter_modal";
import {
  carTypes,
  carCapacities,
  carPrices,
  carSpecifications,
} from "@/app/utils/arrays";

export default function Body(props) {
  const { searchParams, cars, pickupDate, params, setParams } = props;

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    availableCars: cars,
  });
  const [showFilterModal, setShowFilterModal] = useState(false);

  const mobileScreen = useMediaQuery("(max-width:1024px)");
  const dataReady = pickupDate;

  // set availableCars states on searchParams change
  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      const { carType, capacity, specifications, price } = searchParams;
      let filters = carType ? [] : state.availableCars;

      if (carType) {
        carType.split(",").forEach((type) => {
          const cars = state.availableCars.filter(
            (cars) => cars.carType.toLowerCase() === type
          );
          filters = [...filters, ...cars];
        });
      }
      if (price) {
        price.split(",").forEach((price) => {
          if (price === "twoto5k") {
            const cars = filters.filter((car) => car.price <= 5000);
            filters = [...cars];
          } else if (price === "fiveto10k") {
            const cars = filters.filter(
              (car) => car.price > 5000 && car.price < 10000
            );
            filters = [...cars];
          } else {
            const cars = filters.filter((car) => car.price > 10000);
            filters = [...cars];
          }
        });
      }
      if (capacity) {
        capacity.split(",").forEach((caps) => {
          if (caps === "twoToFour") {
            const cars = filters.filter((car) => (car.capacity = 4));
            filters = [...cars];
          } else {
            const cars = filters.filter(
              (car) => car.capacity > 4 && car.capacity < 7
            );
            filters = [...cars];
          }
        });
      }
      if (specifications) {
        specifications.split(",").forEach((spec) => {
          const cars = filters.filter(
            (cars) => cars.specification.toLowerCase() === spec
          );
          filters = [...cars];
        });
      }

      dispatch({ type: "SET_AVAILABLE_CARS", payload: filters });
    }
  }, [searchParams]);

  // set car properties states on searchParams change
  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      const { carType, capacity, specifications, price } = searchParams;

      if (carType) {
        const types = carType.split(",");
        types.forEach((type) => {
          dispatch({
            type: "SET_CAR_TYPE",
            payload: { type: type, value: true },
          });
        });
      } else {
        carTypes.forEach((type) => {
          dispatch({
            type: "SET_CAR_TYPE",
            payload: { type: type, value: false },
          });
        });
      }
      if (specifications) {
        const specs = specifications.split(",");
        specs.forEach((spec) => {
          dispatch({
            type: "SET_SPECIFICATIONS",
            payload: { specs: spec, specValue: true },
          });
        });
      } else {
        carSpecifications.forEach((spec) => {
          dispatch({
            type: "SET_SPECIFICATIONS",
            payload: { specs: spec, specValue: false },
          });
        });
      }
      if (price) {
        const prices = price.split(",");
        prices.forEach((cost) => {
          dispatch({
            type: "SET_PRICE",
            payload: { price: cost, priceValue: true },
          });
        });
      } else {
        carPrices.forEach((price) => {
          dispatch({
            type: "SET_PRICE",
            payload: { price: price, priceValue: false },
          });
        });
      }
      if (capacity) {
        const caps = capacity.split(",");
        caps.forEach((cap) => {
          dispatch({
            type: "SET_CAPACITY",
            payload: { load: cap, loadValue: true },
          });
        });
      } else {
        carCapacities.forEach((load) => {
          dispatch({
            type: "SET_CAPACITY",
            payload: { load: load, loadValue: false },
          });
        });
      }
    }
  }, [searchParams]);

  // filter form events
  const handleCarTypeValueChange = (e) => {
    const name = e.target.name;
    // save the state
    dispatch({
      type: "SET_CAR_TYPE",
      payload: { type: e.target.name, value: !state.carType[name] },
    });

    const value = state.carType[name];

    if (!value) {
      let newParams;
      // check if carType param already exist
      const carTypeObj = params.find(
        (param) => Object.keys(param)[0] === "carType"
      );
      if (carTypeObj) {
        const rest = params.filter(
          (param) => Object.keys(param)[0] !== "carType"
        );
        newParams = [...rest, { carType: [...carTypeObj.carType, name] }];
      } else {
        newParams = [...params, { carType: [name] }];
      }
      setParams(newParams);
    } else {
      const carType = params.find(
        (param) => Object.keys(param)[0] === "carType"
      );
      const newCarType = carType.carType.filter((type) => type !== name);
      const rest = params.filter(
        (param) => Object.keys(param)[0] !== "carType"
      );
      if (newCarType.length < 1) {
        setParams([...rest]);
      } else {
        const newParams = [...rest, { carType: newCarType }];
        setParams(newParams);
      }
    }
  };

  const handleSpecificationValueChange = (e) => {
    const name = e.target.name;
    // save the state
    dispatch({
      type: "SET_SPECIFICATIONS",
      payload: { specs: e.target.name, specValue: !state.specifications[name] },
    });

    const value = state.specifications[name];

    if (!value) {
      let newParams;
      // check if carType param already exist
      const specificationsObj = params.find(
        (param) => Object.keys(param)[0] === "specifications"
      );
      if (specificationsObj) {
        const rest = params.filter(
          (param) => Object.keys(param)[0] !== "specifications"
        );
        newParams = [
          ...rest,
          { specifications: [...specificationsObj.specifications, name] },
        ];
      } else {
        newParams = [...params, { specifications: [name] }];
      }
      setParams(newParams);
    } else {
      const specifications = params.find(
        (param) => Object.keys(param)[0] === "specifications"
      );
      const newSpecifications = specifications.specifications.filter(
        (type) => type !== name
      );
      const rest = params.filter(
        (param) => Object.keys(param)[0] !== "specifications"
      );
      if (newSpecifications.length < 1) {
        setParams([...rest]);
      } else {
        const newParams = [...rest, { specifications: newSpecifications }];
        setParams(newParams);
      }
    }
  };

  const handlePriceValueChange = (e) => {
    const name = e.target.name;
    // save the state
    dispatch({
      type: "SET_PRICE",
      payload: { price: e.target.name, priceValue: !state.price[name] },
    });

    const value = state.price[name];

    if (!value) {
      let newParams;
      // check if carType param already exist
      const priceObj = params.find(
        (param) => Object.keys(param)[0] === "price"
      );
      if (priceObj) {
        const rest = params.filter(
          (param) => Object.keys(param)[0] !== "price"
        );
        newParams = [...rest, { price: [...priceObj.price, name] }];
      } else {
        newParams = [...params, { price: [name] }];
      }
      setParams(newParams);
    } else {
      const price = params.find((param) => Object.keys(param)[0] === "price");
      const newPrice = price.price.filter((type) => type !== name);
      const rest = params.filter((param) => Object.keys(param)[0] !== "price");
      if (newPrice.length < 1) {
        setParams([...rest]);
      } else {
        const newParams = [...rest, { price: newPrice }];
        setParams(newParams);
      }
    }
  };

  const handleCapacityValueChange = (e) => {
    const name = e.target.name;
    // save the state
    dispatch({
      type: "SET_CAPACITY",
      payload: { load: e.target.name, loadValue: !state.capacity[name] },
    });

    const value = state.capacity[name];

    if (!value) {
      let newParams;
      // check if carType param already exist
      const capacityObj = params.find(
        (param) => Object.keys(param)[0] === "capacity"
      );
      if (capacityObj) {
        const rest = params.filter(
          (param) => Object.keys(param)[0] !== "capacity"
        );
        newParams = [...rest, { capacity: [...capacityObj.capacity, name] }];
      } else {
        newParams = [...params, { capacity: [name] }];
      }
      setParams(newParams);
    } else {
      const capacity = params.find(
        (param) => Object.keys(param)[0] === "capacity"
      );
      const newCapacity = capacity.capacity.filter((type) => type !== name);
      const rest = params.filter(
        (param) => Object.keys(param)[0] !== "capacity"
      );
      if (newCapacity.length < 1) {
        setParams([...rest]);
      } else {
        const newParams = [...rest, { capacity: newCapacity }];
        setParams(newParams);
      }
    }
  };

  return (
    <div>
      {mobileScreen && dataReady && (
        <FilterButtonHolder setShowFilterModal={setShowFilterModal} />
      )}
      {mobileScreen && showFilterModal && (
        <FilterModal
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
          params={params}
          setParams={setParams}
          carType={state.carType}
          carSpecifications={state.specifications}
          carPrice={state.price}
          carCapacity={state.capacity}
          handleCarTypeValueChange={handleCarTypeValueChange}
          handleSpecificationValueChange={handleSpecificationValueChange}
          handlePriceValueChange={handlePriceValueChange}
          handleCapacityValueChange={handleCapacityValueChange}
        />
      )}
      <Main
        cars={state.availableCars}
        dataReady={dataReady}
        carType={state.carType}
        carSpecifications={state.specifications}
        carPrice={state.price}
        carCapacity={state.capacity}
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
