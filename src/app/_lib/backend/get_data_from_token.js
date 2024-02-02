import jwt from "jsonwebtoken";

const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    return verifiedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getDataFromToken;
