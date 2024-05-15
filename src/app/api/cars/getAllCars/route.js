import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";

connectDb();

export async function GET(request) {
  try {
    const from = request.nextUrl.searchParams.get("from");

    const pipeline = [
      {
        $match: {
          $or: [
            { bookings: { $size: 0 } }, // Filter cars with no bookings and available
            {
              $expr: {
                $lt: [
                  { $arrayElemAt: ["$bookings.bookedTill", -1] }, // Use the date directly
                  { $toDate: new Date(from) }, // fromDate should be in a recognized format
                ],
              },
            },
          ],
        },
      },
      {
        $project: {
          model: 1,
          type: 1,
          specification: 1,
          capacity: 1,
          rate: 1,
          image: 1,
        },
      },
    ];

    const cars = await Car.aggregate(pipeline);

    // const cars = await Car.find({ availabilityStatus: "Available" }).select(
    //   "model type specification capacity rate image"
    // );

    return NextResponse.json(
      { message: "All cars in the fleet", data: cars },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
