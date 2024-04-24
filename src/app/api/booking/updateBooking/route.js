import { NextResponse } from "next/server";
import User from "@/models/user/user";
import Trips from "@/models/trips/booking";
import connectDb from "../../../../mongo_config/mongo_config";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";
import generateItineraryNumber from "@/app/_lib/backend/generateItineraryNumber";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId, phoneNumber, driver, contactEmail } = requestBody;

    // check if all details are provided
    if (!tripId || !phoneNumber || !driver || !contactEmail) {
      return NextResponse.json(
        {
          message: "Please provide all the fields",
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

    // get current user
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    // change trip status
    trip.tripOwner.username = user.username;
    trip.tripOwner.id = user._id;
    trip.tripOwner.phoneNumber = phoneNumber;
    trip.tripOwner.contactEmail = contactEmail;
    trip.tripOwner.driver = driver;
    trip.itineraryNumber = generateItineraryNumber();
    await trip.save();

    // attach trip id to current user/trip owner
    user.phoneNumber = phoneNumber;
    await user.save();

    return NextResponse.json(
      {
        message: `Your trip with trip id ${trip._id} has been updated`,
        data: trip._id,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
