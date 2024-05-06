"use client";

import { useState } from "react";
import FieldHolder from "./field_holder";
import SelectInputHolder from "./select_input_holder";
import SaveButtonHolder from "./save_button_holder";
import { typeValues, specsValues, fuelTypeValues } from "@/app/utils/arrays";
import { enqueueSnackbar } from "notistack";

// initial car state
const initialCarState = {
  model: "",
  color: "",
  type: "",
  specification: "",
  numberPlate: "",
  capacity: "",
  fuelType: "",
  rate: "",
  image: "",
};

export default function FormHolder() {
  const [car, setCar] = useState(initialCarState);

  // handle car input values change
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  // add new car
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(car).length !== 9) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/addNew`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(car),
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        enqueueSnackbar(data.error, { variant: "error" });
        return;
      }

      const data = await response.json();
      enqueueSnackbar(data.message, { variant: "success" });
      setCar({
        model: "",
        color: "",
        type: "",
        specification: "",
        numberPlate: "",
        capacity: "",
        fuelType: "",
        rate: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full px-6 py-4 lg:px-0">
      <form
        className="w-full flex flex-col items-center justify-center gap-6"
        onSubmit={handleSubmit}
      >
        <FieldHolder
          label={"Model"}
          labelFor={"model"}
          value={car.model}
          handleChange={handleChange}
        />
        <FieldHolder
          label={"Color"}
          labelFor={"color"}
          value={car.color}
          handleChange={handleChange}
        />
        <SelectInputHolder
          label={"Type"}
          labelFor={"type"}
          value={car.type}
          values={typeValues}
          handleChange={handleChange}
        />
        <SelectInputHolder
          label={"Specification"}
          labelFor={"specification"}
          value={car.specification}
          values={specsValues}
          handleChange={handleChange}
        />
        <FieldHolder
          label={"Number plate"}
          labelFor={"numberPlate"}
          value={car.numberPlate}
          handleChange={handleChange}
        />
        <FieldHolder
          label={"Capacity"}
          labelFor={"capacity"}
          value={car.capacity}
          handleChange={handleChange}
        />
        <SelectInputHolder
          label={"Fuel type"}
          labelFor={"fuelType"}
          value={car.fuelType}
          values={fuelTypeValues}
          handleChange={handleChange}
        />
        <FieldHolder
          label={"Rate"}
          labelFor={"rate"}
          value={car.rate}
          handleChange={handleChange}
        />
        <FieldHolder
          label={"Image"}
          labelFor={"image"}
          value={car.image}
          handleChange={handleChange}
        />
        <SaveButtonHolder />
      </form>
    </div>
  );
}
