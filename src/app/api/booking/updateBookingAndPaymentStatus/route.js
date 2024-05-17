import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId, status, paymentStatus, paymentMethod, liscenceNumber } =
      requestBody;

    // check if user is authorized(admin)
    await authCheck(request);

    // check if the trip id is provided
    if (!tripId) {
      return NextResponse.json(
        {
          message: "Please provide the trip id and status",
        },
        { status: 400 }
      );
    }

    // get trip with given id
    const trip = await Booking.findOne({ _id: tripId });

    if (!trip) {
      return NextResponse.json(
        {
          message: `No trip found with id ${tripId}`,
        },
        { status: 404 }
      );
    }

    // update liscence number
    if (liscenceNumber) {
      trip.liscenceNumber = liscenceNumber;
    }

    if (status) {
      // update trip status
      trip.status = status;
    }

    // update payment status
    if (paymentStatus && paymentMethod) {
      trip.paymentStatus = paymentStatus;
      trip.paymentMethod = paymentMethod;
    }

    await trip.save();

    return NextResponse.json(
      {
        message: `Your trip with id ${tripId} has been updated`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
