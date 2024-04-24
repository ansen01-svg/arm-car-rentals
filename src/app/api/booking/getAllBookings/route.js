import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Booking from "@/models/booking/booking";

connectDb();

export async function GET(request) {
  try {
    const bookings = await Booking.find({});

    return NextResponse.json(
      {
        message: "All bookings",
        data: bookings,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
