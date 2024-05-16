const fetchCars = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/getAdminCars`
    );

    if (response.status !== 200) {
      const data = await response.json();
      console.log("fetch unsuccesssful data ->", data);
      return [];
    }

    const data = await response.json();
    console.log("fetch successsful data ->", data);
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchCars;
