import sanityClient from "@/sanity/sanity_client";
import { cache } from "react";

// fetch cars from sanity CMS
const fetchCars = async (id) => {
  if (id) {
    try {
      const cars = await sanityClient.fetch(
        `*[_type == "car" && _id == "${id}"]`
      );

      if (cars) {
        return cars[0];
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const cars = await sanityClient.fetch(
      `*[_type == "car" && available == true]`
    );

    if (cars) {
      return cars;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchCars;
