import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";

connectDb();

export async function POST(request) {
  try {
    const cars = await Car.find({});

    return NextResponse.json(
      { message: "All cars in the fleet", data: cars },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
