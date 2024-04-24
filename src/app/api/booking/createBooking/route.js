import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import verifyToken from "@/app/_lib/backend/jose_verifyJwt";
import User from "@/models/user/user";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const {
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      carId,
      price,
      days,
      tax,
      fees,
    } = requestBody;

    const fieldsArray = [
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      carId,
      price,
      days,
      tax,
      fees,
    ];
    // check if all details are provided
    if (fieldsArray.length < 9) {
      return NextResponse.json(
        {
          message: "Please provide all the details",
        },
        { status: 400 }
      );
    }

    // get userId
    const userId = await verifyToken(request);
    const user = await User.findOne({ _id: userId });

    // create a new booking
    const booking = {
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      carId,
      userId,
      email: user.email,
      totalCost: {
        price,
        days,
        tax,
        fees,
        discount: 0,
        total: price * days + tax + fees,
      },
    };

    const newBooking = await Booking.create(booking);

    return NextResponse.json(
      {
        message: "A new trip has been created",
        data: newBooking._id,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
