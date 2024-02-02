import { NextResponse } from "next/server";
import Trips from "@/models/trips/trips";
import connectDb from "../../../../mongo_config/mongo_config";

connectDb();

export async function POST(request) {
  try {
    const trips = await Trips.find({});

    return NextResponse.json(
      {
        data: trips,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
