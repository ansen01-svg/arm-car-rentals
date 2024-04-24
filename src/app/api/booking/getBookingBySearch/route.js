import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Booking from "@/models/booking/booking";

connectDb();

export async function GET(request) {
  try {
    const searchTerm = request.nextUrl.searchParams.get("searchTerm");

    // check if search term is provided
    if (!searchTerm) {
      return NextResponse.json(
        {
          message: "Please provide a search term.",
        },
        { status: 400 }
      );
    }

    // Search for booking that match the search term
    const booking = await Booking.find({
      $or: [
        { username: { $regex: searchTerm, $options: "i" } },
        { email: { $regex: searchTerm, $options: "i" } },
        { role: { $regex: searchTerm, $options: "i" } },
      ],
    }).exec();

    // if no booking is found
    if (booking.length < 1) {
      return NextResponse.json(
        {
          message: "No user found",
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
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
