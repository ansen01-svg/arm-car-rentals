const fetchSingleCar = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/getSingleCar?carId=${id}`
    );

    if (response.status !== 200) {
      const data = await response.json();
      console.log(data.error);
      return [];
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchSingleCar;
