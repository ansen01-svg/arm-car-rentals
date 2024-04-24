import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId, tripStatus, paymentStatus, paymentMethod } = requestBody;

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

    // update trip status
    if (tripStatus) {
      trip.status = tripStatus;
    }

    // update payment status
    if (paymentStatus && paymentMethod) {
      // check if uaer is authorized(admin)
      await authCheck();

      const payment = {
        status: paymentStatus,
        method: paymentMethod,
      };

      trip.payment = payment;
    }

    await trip.save();

    return NextResponse.json(
      {
        message: `Your trip status with id ${tripId} has been changed`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
