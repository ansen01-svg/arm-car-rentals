import { NextResponse } from "next/server";
import Trips from "@/models/trips/trips";
import connectDb from "@/mongo_config/mongo_config";

connectDb();

export async function GET(request) {
  try {
    const tripId = request.nextUrl.searchParams.get("tripId");

    // get trip with given id
    const trip = await Trips.findOne({ _id: tripId });

    if (!trip) {
      return NextResponse.json(
        {
          message: `No trip found with id ${tripId}`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: trip,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
