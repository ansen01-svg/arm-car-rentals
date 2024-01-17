"use client";

import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import useCheckFaultyAccess from "../_lib/frontend/hooks/useCheckFaultyAccess";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";
import { initialState, reducer } from "./reducer";
import getInitialParams from "../_lib/frontend/getInitialParams";

export default function CarsPage({ searchParams, cars }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    availableCars: cars,
  });
  const [params, setParams] = useState(getInitialParams(searchParams));

  const router = useRouter();
  const { faultyAccess } = useCheckFaultyAccess(searchParams);

  // change current url when params array changes
  useEffect(() => {
    let url = "/cars?";

    if (params.length > 0) {
      params.forEach((param) => {
        const key = Object.keys(param);
        const value = Object.values(param);
        let pair = "";

        // check if value is an array
        if (value.length > 1) {
          let valueString = "";

          value.forEach((val) => {
            valueString = `${valueString} + ${val},`;
          });
          pair = pair + `${key}=${valueString.slice(0, -1)}&`;
        } else {
          pair = pair + `${key}=${value}&`;
        }
        url = url + pair;
      });
    }
    router.push(url.slice(0, -1));
  }, [params, router]);

  // fetch cars according to filter params
  useEffect(() => {
    // fetch cars
  }, [params]);

  // set search params to state
  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      const {
        pickupDate,
        dropoffDate,
        pickupTime,
        dropoffTime,
        carType,
        capacity,
        specifications,
        price,
      } = searchParams;

      if (pickupDate && dropoffDate && pickupTime && dropoffTime) {
        // set states
        dispatch({ type: "SET_PICKUP_DATE", payload: dayjs(pickupDate) });
        dispatch({
          type: "SET_DROPOFF_DATE",
          payload: dayjs(dropoffDate),
        });
        dispatch({ type: "SET_PICKUP_TIME", payload: dayjs(pickupTime) });
        dispatch({
          type: "SET_DROPOFF_TIME",
          payload: dayjs(dropoffTime),
        });
      }

      if (carType) {
        const types = carType.split(",");
        types.forEach((type) => {
          dispatch({
            type: "SET_CAR_TYPE",
            payload: { type: type, value: true },
          });
        });
      } else {
        ["standard", "luxury", "premium", "van"].forEach((type) => {
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
        ["manual", "automatic"].forEach((spec) => {
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
        ["twoto5k", "fiveto10k", "tenkAndAbove"].forEach((price) => {
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
        ["twoToFour", "twoToSix"].forEach((load) => {
          dispatch({
            type: "SET_CAPACITY",
            payload: { load: load, loadValue: false },
          });
        });
      }
    }
  }, [searchParams]);

  // set minimum date for dropoff date
  useEffect(() => {
    if (state.pickupDate) {
      dispatch({
        type: "SET_MINDATE",
        payload: state.pickupDate.add(1, "day"),
      });
    }
  }, [state.pickupDate]);

  // date form events
  const handlePickupDateChange = (date) => {
    dispatch({ type: "SET_PICKUP_DATE", payload: date });
  };

  const handleDropoffDateChange = (date) => {
    dispatch({ type: "SET_DROPOFF_DATE", payload: date });
  };

  const handlePickupTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      dispatch({ type: "SET_PICKUP_TIME", payload: time });
    }
  };

  const handleDropoffTimeChange = (time) => {
    if (time && time !== "Invalid Date") {
      dispatch({ type: "SET_DROPOFF_TIME", payload: time });
    }
  };

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

  if (faultyAccess) {
    return (
      <div className="w-full">
        <SearchOptionsHolder
          pickupDate={state.pickupDate}
          dropoffDate={state.dropoffDate}
          pickupTime={state.pickupTime}
          dropoffTime={state.dropoffTime}
          minDate={state.minDate}
          handlePickupDateChange={handlePickupDateChange}
          handleDropoffDateChange={handleDropoffDateChange}
          handlePickupTimeChange={handlePickupTimeChange}
          handleDropoffTimeChange={handleDropoffTimeChange}
          setParams={setParams}
        />
        <ErrorMessageHolder />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <SearchOptionsHolder
          pickupDate={state.pickupDate}
          dropoffDate={state.dropoffDate}
          pickupTime={state.pickupTime}
          dropoffTime={state.dropoffTime}
          minDate={state.minDate}
          handlePickupDateChange={handlePickupDateChange}
          handleDropoffDateChange={handleDropoffDateChange}
          handlePickupTimeChange={handlePickupTimeChange}
          handleDropoffTimeChange={handleDropoffTimeChange}
          setParams={setParams}
        />
        <Body
          cars={state.availableCars}
          showFilterModal={state.showFilterModal}
          dispatch={dispatch}
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
}
