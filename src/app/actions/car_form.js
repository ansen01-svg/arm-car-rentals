"use server";

async function submitCar(formData) {
  const rawFormData = {
    model: formData.get("model"),
    color: formData.get("color"),
    type: formData.get("type"),
    specification: formData.get("specification"),
    numberPlate: formData.get("numberPlate"),
    fuelType: formData.get("fuelType"),
    rate: formData.get("rate"),
    image: formData.get("image"),
  };

  // mutate data
  // revalidate cache
}

export default submitCar;
