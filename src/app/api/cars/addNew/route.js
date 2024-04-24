import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const {
      numberPlate,
      model,
      type,
      specification,
      color,
      fueType,
      seats,
      rate,
      image,
    } = requestBody;

    // check if user is authorized(is admin)
    await authCheck(request);

    //check if all the fields are provided
    if (
      !numberPlate ||
      !model ||
      !type ||
      !color ||
      !fueType ||
      !rate ||
      !image
    ) {
      return NextResponse.json(
        { error: "Please provide all the fields" },
        { status: 400 }
      );
    }

    //check if the car exists
    const car = await Car.findOne({ numberPlate });

    if (car) {
      return NextResponse.json(
        {
          error:
            "A car with this number plate is already present in the fleet.",
        },
        { status: 400 }
      );
    }

    // add car to the database
    const newCar = {
      numberPlate,
      model,
      type,
      color,
      fueType,
      rate,
      image,
      specification: specification || "Manual",
      seats: seats || 5,
    };

    await Car.create(newCar);

    return NextResponse.json(
      {
        message: "A new car has been added to the fleet",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
