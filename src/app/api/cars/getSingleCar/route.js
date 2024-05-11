import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";

connectDb();

export async function GET(request) {
  try {
    const carId = request.nextUrl.searchParams.get("carId");

    // get car with given id
    const car = await Car.find({ _id: carId });

    if (!car) {
      return NextResponse.json(
        {
          message: `No car found with id ${carId}`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: car,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
