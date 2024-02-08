import { NextResponse } from "next/server";
import User from "@/models/user/user";
import Trips from "@/models/trips/trips";
import connectDb from "@/mongo_config/mongo_config";
import generateItineraryNumber from "@/app/_lib/backend/generateItineraryNumber";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId } = requestBody;

    // check if all details are provided
    if (!tripId) {
      return NextResponse.json(
        {
          message: "Please provide trip id",
        },
        { status: 400 }
      );
    }

    const trip = await Trips.findOne({ _id: tripId });

    // check if id is valid
    if (!trip) {
      return NextResponse.json(
        {
          message: `No trip found with id ${tripId}`,
        },
        { status: 400 }
      );
    }

    // change trip status
    trip.status = "booked";
    trip.itineraryNumber = generateItineraryNumber();
    await trip.save();

    // get current user
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    // attach trip to user
    user.myTrips.push({ tripId: trip._id });
    await user.save();

    return NextResponse.json(
      {
        message: `Your trip has been booked successfully`,
        data: {
          email: trip.tripOwner.contactEmail,
          itineraryNumber: trip.itineraryNumber,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
