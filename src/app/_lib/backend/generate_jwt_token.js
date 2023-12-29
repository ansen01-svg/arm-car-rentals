import jwt from "jsonwebtoken";

const generateJwtToken = (id, username, email) => {
  const token = jwt.sign({ id, username, email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

export default generateJwtToken;
