import * as jose from "jose";

const createJwt = async (id, username, email, role) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const session = await new jose.SignJWT({ id, username, email, role })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("5d")
    .sign(secret);

  return session;
};

export default createJwt;
