const fetchSingleUser = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getSingleUser?userId=${id}`
    );

    if (response.status !== 200) {
      const data = await response.json();
      console.log(data);
      return [];
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchSingleUser;
