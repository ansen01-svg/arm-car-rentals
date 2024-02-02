import { NextResponse } from "next/server";
import User from "@/models/user/user";
import Trips from "@/models/trips/trips";
import connectDb from "../../../../mongo_config/mongo_config";
import getDataFromToken from "@/app/_lib/backend/get_data_from_token";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const {
      pickupDate,
      dropoffDate,
      pickupTime,
      dropoffTime,
      carName,
      capacity,
      specification,
      price,
      totalDays,
      tax,
    } = requestBody;

    // check if all details are provided
    if (
      !pickupDate ||
      !dropoffDate ||
      !pickupTime ||
      !dropoffTime ||
      !carName ||
      !capacity ||
      !specification ||
      !price ||
      !totalDays ||
      !tax
    ) {
      return NextResponse.json(
        {
          message: "Please provide all the details",
        },
        { status: 400 }
      );
    }

    // get current user
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    // create a new trip
    const trip = {
      pickupDate,
      dropoffDate,
      pickupTime,
      dropoffTime,
      tripOwner: {
        username: user.username,
        id: user._id,
      },
      vehicle: {
        name: carName,
        capacity,
        specification,
        price,
      },
      totalCost: {
        price,
        tax,
        days: totalDays,
        total: price * totalDays + tax,
      },
    };

    const newTrip = await Trips.create(trip);

    // attach trip id to current user/trip owner
    user.myTrips.push({ tripId: newTrip._id });
    await user.save();

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
