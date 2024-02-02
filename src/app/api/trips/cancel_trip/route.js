import { NextResponse } from "next/server";
import Trips from "@/models/trips/trips";
import connectDb from "../../../../mongo_config/mongo_config";

connectDb();

export async function POST(request) {
  try {
    const { tripId, tripStatus } = request.params;

    // check if the trip id is provided
    if (!tripId) {
      return NextResponse.json(
        {
          message: "Please provide the trip id",
        },
        { status: 400 }
      );
    }

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

    trip.status = tripStatus;
    await trip.save();

    return NextResponse.json(
      {
        message: `Your trip with id ${tripId} has been cancelled`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
