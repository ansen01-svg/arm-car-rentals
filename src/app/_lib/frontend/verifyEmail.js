const verifyEmail = async (token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/verify_email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }
    );

    if (response.status === 400) {
      return { msg: "error" };
    } else if (response.status === 409) {
      return { msg: "duplicate" };
    } else if (response.status === 200) {
      return { msg: "success" };
    }

    return { msg: "unknown error" };
  } catch (error) {
    console.error(error);
    return { msg: "network error" };
  }
};

export default verifyEmail;
