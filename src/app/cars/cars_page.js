"use client";

import { useEffect, useReducer, useState } from "react";
import dayjs from "dayjs";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";
import { initialState, reducer } from "./reducer";
import { useRouter } from "next/navigation";

export default function CarsPage({ searchParams, cars }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    availableCars: cars,
  });
  const [params, setParams] = useState([]);

  const router = useRouter();

  // check if params are ok
  const isInvalidDate = searchParams
    ? dayjs(searchParams.dropoffTime).format("HH:mm a") === "Invalid Date"
    : true;

  // set search params to state
  useEffect(() => {
    if (Object.keys(searchParams).length !== 0) {
      // set the dates
      const { pickupDate, dropoffDate, pickupTime, dropoffTime } = searchParams;
      dispatch({ type: "SET_PICKUP_DATE", payload: dayjs(pickupDate) });
      dispatch({ type: "SET_DROPOFF_DATE", payload: dayjs(dropoffDate) });
      dispatch({ type: "SET_PICKUP_TIME", payload: dayjs(pickupTime) });
      dispatch({ type: "SET_DROPOFF_TIME", payload: dayjs(dropoffTime) });
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
    // push the car type to url
    const newUrl = currentUrl + `&carType=${e.target.name}`;
    router.push(newUrl);
    // save the state
    dispatch({ type: "SET_CAR_TYPE", payload: { type: e.target.name } });
  };

  const handleSpecificationValueChange = (e) => {
    const newUrl = currentUrl + `&specifications=${e.target.name}`;
    router.push(newUrl);
    dispatch({ type: "SET_SPECIFICATIONS", payload: { specs: e.target.name } });
  };

  const handlePriceValueChange = (e) => {
    const newUrl = currentUrl + `&totalPrice=${e.target.name}`;
    router.push(newUrl);
    dispatch({
      type: "SET_PRICE",
      payload: { price: e.target.name },
    });
  };

  const handleCapacityValueChange = (e) => {
    const newUrl = currentUrl + `&capacity=${e.target.name}`;
    router.push(newUrl);
    dispatch({
      type: "SET_CAPACITY",
      payload: { load: e.target.name },
    });
  };

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
      />
      {isInvalidDate ? (
        <ErrorMessageHolder />
      ) : (
        <Body
          cars={state.availableCars}
          showFilterModal={state.showFilterModal}
          dispatch={dispatch}
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
    </div>
  );
}
