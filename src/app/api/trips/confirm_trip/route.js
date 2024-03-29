import { NextResponse } from "next/server";
import User from "@/models/user/user";
import Trips from "@/models/trips/trips";
import connectDb from "@/mongo_config/mongo_config";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";
import sendConfirmationEmail from "@/app/services/mailgun/confirmationEmail";

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

    // check if trip is already booked
    if (trip.status === "booked") {
      return NextResponse.json(
        {
          message: `Your trip has already been confirmed`,
        },
        { status: 400 }
      );
    }

    // change trip status
    trip.status = "booked";
    await trip.save();

    // get current user
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    // attach trip to user
    user.myTrips.push({ tripId: trip._id });
    await user.save();

    // send confirmation email
    const emailOptions = {
      email: user.email,
      username: user.username,
      itineraryNumber: trip.itineraryNumber,
      tripStartDate: trip.tripStartDate,
      pickupTime: trip.pickupTime,
    };

    // send confirmation email
    // await sendConfirmationEmail(emailOptions);

    return NextResponse.json(
      {
        message: `Your trip has been booked successfully`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
