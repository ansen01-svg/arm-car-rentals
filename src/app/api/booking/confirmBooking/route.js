import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import User from "@/models/user/user";
import Booking from "@/models/booking/booking";
import verifyProvidedToken from "@/app/_lib/backend/verify_provided_token";
import verifyToken from "@/app/_lib/backend/jose_verifyJwt";
import sendConfirmationEmail from "@/app/services/mailgun/confirmationEmail";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId, token } = requestBody;

    // check if all details are provided
    if (!tripId && !token) {
      return NextResponse.json(
        {
          message: "Please provide trip id",
        },
        { status: 400 }
      );
    }

    const trip = await Booking.findOne({ _id: tripId });

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
    if (trip.status === "Booked") {
      return NextResponse.json(
        {
          message: `Your trip has already been confirmed`,
        },
        { status: 400 }
      );
    }

    // change trip status
    trip.status = "Booked";
    await trip.save();

    // get current user
    const userId = await verifyProvidedToken(token);
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
