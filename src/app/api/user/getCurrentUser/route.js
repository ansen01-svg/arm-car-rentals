import { NextResponse } from "next/server";
import User from "@/models/user/user";
import connectDb from "../../../../mongo_config/mongo_config";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";

connectDb();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
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
