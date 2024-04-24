const fetchTrip = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/getSingleBooking?bookingId=${id}`
    );

    if (response.status === 200) {
      const data = await response.json();
      return data.data;
    } else {
      const data = await response.json();
      console.log(data);
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchTrip;
