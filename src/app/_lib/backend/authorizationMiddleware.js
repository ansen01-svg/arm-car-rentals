import { NextResponse } from "next/server";
import User from "@/models/user/user";
import verifyToken from "@/app/_lib/backend/jose_verifyJwt";

const authCheck = async (request) => {
  const session = await verifyToken(request);
  const user = await User.findOne({ _id: session });

  if (user.role !== "Admin") {
    return NextResponse.json(
      { error: "You are not authorized to make this request" },
      { status: 403 }
    );
  }

  return null;
};

export default authCheck;
