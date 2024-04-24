import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { carId } = requestBody;

    // check if user is authorized(is admin)
    await authCheck(request);

    await Car.findOneAndDelete({ _id: carId });

    return NextResponse.json(
      {
        message: `Car with id ${carId} has been removed from the fleet`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
