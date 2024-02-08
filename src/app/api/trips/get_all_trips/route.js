import { NextResponse } from "next/server";
import User from "@/models/user/user";
import connectDb from "../../../../mongo_config/mongo_config";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";

connectDb();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const trips = await User.findOne({ _id: userId }).select("myTrips");

    return NextResponse.json(
      {
        data: trips,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
