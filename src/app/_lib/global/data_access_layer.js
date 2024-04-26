import * as jose from "jose";
import { cookies } from "next/headers";

const verifySession = async () => {
  try {
    const token = cookies().get("token")?.value || "";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const { payload } = await jose.jwtVerify(token, secret);

    return payload;
  } catch (error) {
    return {};
  }
};

export default verifySession;
