import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Trips from "@/models/trips/trips";
import connectDb from "../../../../mongo_config/mongo_config";

connectDb();

export async function GET(request) {
  try {
    const token = request.nextUrl.searchParams.get("token");
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    const trips = await Trips.find({
      "tripOwner.id": verifiedToken.id,
    }).sort({ status: 1 });

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
