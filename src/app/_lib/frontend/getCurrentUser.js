const getCurrentUser = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getCurrentUser`,
      {
        method: "GET",
        credentials: "same-origin",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentUser;
