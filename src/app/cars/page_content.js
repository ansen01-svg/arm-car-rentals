"use client";

import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import useCheckFaultyAccess from "../_lib/frontend/hooks/useCheckFaultyAccess";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";
import { initialFormState, reducer } from "./reducers/form_reducer";
import getInitialParams from "../_lib/frontend/getInitialParams";
import changeTitle from "../_lib/frontend/changeFilterTitles";

export default function PageContent(props) {
  const { searchParams, cars } = props;

  const [state, dispatch] = useReducer(reducer, initialFormState);
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

  // set dates states on searchParams change
  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      const { pickupDate, dropoffDate, pickupTime, dropoffTime } = searchParams;

      if (pickupDate && dropoffDate && pickupTime && dropoffTime) {
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
  }

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
        cars={cars}
        searchParams={searchParams}
        pickupDate={state.pickupDate}
        params={params}
        setParams={setParams}
      />
    </div>
  );
}
