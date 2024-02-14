const fetchAllTrips = async (token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/trips/get_all_trips?token=${token}`
    );

    if (response.status === 200) {
      const data = await response.json();
      return data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllTrips;
