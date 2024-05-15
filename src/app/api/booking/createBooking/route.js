import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import verifyToken from "@/app/_lib/backend/jose_verifyJwt";
import User from "@/models/user/user";
import Car from "@/models/car/car";

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
      rate,
      days,
      tax,
      fees,
      discount,
    } = requestBody;

    const fieldsArray = [
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      carId,
      rate,
      days,
      tax,
      fees,
      discount,
    ];
    // check if all details are provided
    if (fieldsArray.length < 10) {
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

    // get car
    const car = await Car.findOne({ _id: carId });

    // create a new booking
    const booking = {
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      vehicleId: carId,
      vehicleNumber: car.numberPlate,
      userId,
      email: user.email,
      rate: parseInt(rate),
      days: parseInt(days),
      tax: parseInt(tax),
      fees: parseInt(fees),
      discount: parseInt(discount),
      total: parseInt(rate) * parseInt(days) + parseInt(tax) + parseInt(fees),
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
