import { NextResponse } from "next/server";
import * as jose from "jose";
import connectDb from "../../../../mongo_config/mongo_config";
import Booking from "@/models/booking/booking";

connectDb();

const fetchUserId = async (token) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function GET(request) {
  try {
    const token = request.nextUrl.searchParams.get("token");

    // fetch user id
    const sessionId = await fetchUserId(token);

    const bookings = await Booking.find({
      userId: sessionId,
    })
      .sort({ status: 1 })
      .populate({ path: "carId", select: "type model" })
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
