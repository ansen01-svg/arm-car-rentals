"use client";

import { useEffect, useState } from "react";
import sanityClient from "@/sanity/sanity_client";
import useCheckFaultyAccess from "@/app/_lib/frontend/hooks/useCheckFaultyAccess";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";

export default function PageContent(props) {
  const { searchParams, cars } = props;

  const { faultyAccess } = useCheckFaultyAccess(searchParams);

  const [myCars, setCars] = useState([]);

  // fetch cars
  useEffect(() => {
    const getCars = async () => {
      try {
        const cars = await sanityClient.fetch(
          `*[_type == "car" && available == true]`
        );

        if (cars) {
          setCars(cars);
        } else {
          setCars([]);
        }
      } catch (error) {
        console.log(error);
        setCars([]);
      }
    };

    getCars();
  }, []);

  if (faultyAccess) {
    return (
      <div className="w-full">
        <SearchOptionsHolder />
        <ErrorMessageHolder />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-56px-224px)] md:min-h-[calc(100vh-64px-224px)]">
      <SearchOptionsHolder />
      <Body cars={myCars} />
    </div>
  );
}
