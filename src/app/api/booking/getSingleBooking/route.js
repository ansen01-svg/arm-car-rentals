import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import Car from "@/models/car/car";

connectDb();

export async function GET(request) {
  try {
    const bookingId = request.nextUrl.searchParams.get("bookingId");

    // get trip with given id
    const booking = await Booking.findOne({ _id: bookingId }).populate({
      path: "vehicleId",
      select: "type capacity specification",
      model: Car,
    });

    if (!booking) {
      return NextResponse.json(
        {
          message: `No booking found with id ${bookingId}`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Your booking",
        data: booking,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
