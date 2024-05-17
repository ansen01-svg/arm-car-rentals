import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Booking from "@/models/booking/booking";

connectDb();

export async function GET(request) {
  try {
    const bookingId = request.nextUrl.searchParams.get("bookingId");

    // get trip with given id
    const booking = await Booking.find({ _id: bookingId }).select(
      "tripStartDate tripEndDate vehicleNumber userId email status driver phoneNumber liscenceNumber total paymentStatus paymentMethod itineraryNumber"
    );

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
