"use server";

import { redirect } from "next/navigation";

const searchCars = async (formData) => {
  let gotData = false;
  let pud = "";
  let dod = "";
  let put = "";
  let dot = "";

  try {
    const pickUpDate = formData.get("pickUpDate");
    const dropOffDate = formData.get("dropOffDate");
    const pickUpTime = formData.get("pickUpTime");
    const dropOffTime = formData.get("dropOffTime");

    if (new Date(pickUpDate) > new Date(dropOffDate)) {
    }

    pud = pickUpDate;
    dod = dropOffDate;
    put = pickUpTime;
    dot = dropOffTime;
    gotData = true;
  } catch (error) {
    console.log(error);
    gotData = false;
  } finally {
    if (gotData) {
      redirect(`/cars?pud=${pud}&dod=${dod}&put=${put}&dot=${dot}`, "push");
    }
  }
};

export default searchCars;
