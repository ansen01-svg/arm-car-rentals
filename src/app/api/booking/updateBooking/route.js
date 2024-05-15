import { NextResponse } from "next/server";
import User from "@/models/user/user";
import Booking from "@/models/booking/booking";
import connectDb from "../../../../mongo_config/mongo_config";
import verifyToken from "@/app/_lib/backend/jose_verifyJwt";
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

    // get current user
    const userId = await verifyToken(request);
    const user = await User.findOne({ _id: userId });

    // change trip status
    trip.phoneNumber = phoneNumber;
    trip.contactEmail = contactEmail;
    trip.driver = driver;
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
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
