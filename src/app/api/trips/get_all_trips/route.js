import { NextResponse } from "next/server";
import User from "@/models/user/user";
import Trips from "@/models/trips/trips";
import connectDb from "../../../../mongo_config/mongo_config";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";

connectDb();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const trips = await User.findOne({ _id: userId }).select("myTrips");

    const completeTrips = await Promise.all(
      trips.myTrips.map(async (trip) => {
        const fullTrip = await Trips.findOne({ _id: trip.tripId });
        return fullTrip;
      })
    );

    return NextResponse.json(
      {
        data: completeTrips,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
