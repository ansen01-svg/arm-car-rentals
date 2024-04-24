import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";

connectDb();

export async function GET(request) {
  try {
    const searchTerm = request.nextUrl.searchParams.get("search");

    // check if search termis provided
    if (!searchTerm) {
      return NextResponse.json(
        {
          message: "Please provide a search term.",
        },
        { status: 400 }
      );
    }

    // Search for cars that match the search term
    const cars = await Car.find({
      $or: [
        { model: { $regex: searchTerm, $options: "i" } },
        { type: { $regex: searchTerm, $options: "i" } },
        { specification: { $regex: searchTerm, $options: "i" } },
        { numberPlate: { $regex: searchTerm, $options: "i" } },
        { availabilityStatus: { $regex: searchTerm, $options: "i" } },
        { status: { $regex: searchTerm, $options: "i" } },
        { fuelType: { $regex: searchTerm, $options: "i" } },
      ],
    }).exec();
    console.log(searchTerm, cars);
    // if no cars are found
    if (cars.length < 1) {
      return NextResponse.json(
        {
          message: "No cars found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        data: cars,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
