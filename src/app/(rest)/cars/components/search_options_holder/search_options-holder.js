"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useReducer } from "react";
import { useMediaQuery } from "@mui/material";
import dayjs from "dayjs";
import { initialFormState, reducer } from "../../reducers/form_reducer";
import SearchFieldsHolder from "./search_fields_holder";
import FormHolder from "./form/form_holder";

export default function SearchOptionsHolder({ fetchCars }) {
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [showForm, setShowForm] = useState(false);

  const params = useSearchParams();

  const mobileScreen = useMediaQuery("(max-width:1024px)");
  const desktopScreen = useMediaQuery("(min-width:1024px)");

  // set dates states on searchParams change
  useEffect(() => {
    const paramsObj = new URLSearchParams(params);
    const pickupDate = paramsObj.get("pickupDate");
    const dropoffDate = paramsObj.get("dropoffDate");
    const pickupTime = paramsObj.get("pickupTime");
    const dropoffTime = paramsObj.get("dropoffTime");

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
  }, [params]);

  // set minimum date for dropoff date
  useEffect(() => {
    if (state.pickupDate) {
      dispatch({
        type: "SET_MINDATE",
        payload: state.pickupDate.add(1, "day"),
      });
    }
  }, [state.pickupDate]);

  return (
    <div className="w-full bg-white sticky top-[56px] left-0 z-50 shadow-md md:top-[64px]">
      {mobileScreen && !showForm && (
        <SearchFieldsHolder
          pickupDate={state.pickupDate}
          dropoffDate={state.dropoffDate}
          pickupTime={state.pickupTime}
          dropoffTime={state.dropoffTime}
          setShowForm={setShowForm}
        />
      )}
      {(desktopScreen || showForm) && (
        <FormHolder
          dispatch={dispatch}
          pickupDate={state.pickupDate}
          dropoffDate={state.dropoffDate}
          pickupTime={state.pickupTime}
          dropoffTime={state.dropoffTime}
          minDate={state.minDate}
          setShowForm={setShowForm}
          fetchCars={fetchCars}
        />
      )}
    </div>
  );
}
