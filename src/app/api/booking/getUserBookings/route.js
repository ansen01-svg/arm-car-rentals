import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import verifyProvidedToken from "@/app/_lib/backend/verify_provided_token";

connectDb();

export async function GET(request) {
  try {
    const token = request.nextUrl.searchParams.get("token");

    // fetch user id
    const userId = await verifyProvidedToken(token);

    const bookings = await Booking.find({
      userId: userId,
      status: { $ne: "In booking process" },
    })
      .sort({ status: 1 })
      .exec();

    return NextResponse.json(
      {
        data: bookings,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
