import { NextResponse } from "next/server";
import User from "@/models/user/user";
import connectDb from "../../../../mongo_config/mongo_config";
import verifyToken from "@/app/_lib/backend/jose_verifyJwt";

connectDb();

export async function GET(request) {
  try {
    const userId = await verifyToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json(
      {
        message: "Current user",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
