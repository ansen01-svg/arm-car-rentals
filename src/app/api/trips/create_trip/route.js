import { NextResponse } from "next/server";
import Trips from "@/models/trips/trips";
import connectDb from "../../../../mongo_config/mongo_config";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const {
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      type,
      name,
      capacity,
      specification,
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
      type,
      name,
      capacity,
      specification,
      price,
      days,
      tax,
      fees,
    ];

    // check if all details are provided
    if (fieldsArray.length < 12) {
      return NextResponse.json(
        {
          message: "Please provide all the details",
        },
        { status: 400 }
      );
    }

    // create a new trip
    const trip = {
      tripStartDate,
      tripEndDate,
      pickupTime,
      dropoffTime,
      status: "in booking process",
      vehicle: {
        type,
        name,
        capacity,
        specification,
        price,
      },
      totalCost: {
        price,
        tax,
        fees,
        days,
        total: price * days + tax + fees,
      },
    };

    const newTrip = await Trips.create(trip);

    return NextResponse.json(
      {
        message: "A new trip has been created",
        data: newTrip._id,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
