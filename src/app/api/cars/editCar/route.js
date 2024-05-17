import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { carId, rate, status, availabilityStatus } = requestBody;

    // check if user is authorized(is admin)
    await authCheck(request);

    const car = await Car.findOne({ _id: carId });

    // edit car
    if (rate) {
      car.rate = parseInt(rate);
    }

    if (status) {
      car.status = status;
    }

    if (availabilityStatus) {
      car.availabilityStatus = availabilityStatus;
    }

    await car.save();

    return NextResponse.json(
      {
        message: `Car with id ${carId} has been edited successfully`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
