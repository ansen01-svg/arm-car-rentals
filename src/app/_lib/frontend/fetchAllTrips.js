const fetchAllTrips = async (token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/getUserBookings?token=${token}`
    );

    if (response.status !== 200) {
      const data = await response.json();
      console.log(data);
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllTrips;
