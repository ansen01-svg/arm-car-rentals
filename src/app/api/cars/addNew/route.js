import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Car from "@/models/car/car";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";
import capitalizeFirstLetter from "@/app/_lib/global/uppercase_converter";

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
      fuelType,
      capacity,
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
      !fuelType ||
      !rate ||
      !capacity ||
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
      model: capitalizeFirstLetter(model),
      type,
      color: capitalizeFirstLetter(color),
      fuelType,
      rate: parseInt(rate),
      image,
      capacity: parseInt(capacity),
      specification: specification || "Manual",
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
