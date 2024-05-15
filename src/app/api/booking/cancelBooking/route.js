import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Booking from "@/models/booking/booking";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId } = requestBody;

    // get trip with given id
    const booking = await Booking.findOne({ _id: tripId });

    booking.status = "Cancelled";
    await booking.save();

    return NextResponse.json(
      {
        message: `Your booking with id ${tripId} has been cancelled`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
