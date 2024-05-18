import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import Booking from "@/models/booking/booking";
import User from "@/models/user/user";
import Car from "@/models/car/car";
import verifyProvidedToken from "@/app/_lib/backend/verify_provided_token";
import sendConfirmationEmail from "@/app/services/mailgun/confirmationEmail";

connectDb();

// modify date to mm/dd/yyyy format
const restructureDate = (dateString) => {
  const dateArray = dateString.split("/");
  const restructuredDate = `${dateArray[1]}/${dateArray[0]}/20${dateArray[2]}`;
  return new Date(restructuredDate);
};

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { tripId, token } = requestBody;

    // checks
    // 1. check if all details are provided
    if (!tripId && !token) {
      return NextResponse.json(
        {
          message: "Please provide trip id",
        },
        { status: 400 }
      );
    }

    const trip = await Booking.findOne({ _id: tripId });

    // 2. check if id is valid
    if (!trip) {
      return NextResponse.json(
        {
          message: `No trip found with id ${tripId}`,
        },
        { status: 404 }
      );
    }

    // 3. check if trip is already booked
    if (trip.status === "Booked") {
      return NextResponse.json(
        {
          message: `Your trip has already been confirmed`,
        },
        { status: 409 }
      );
    }

    // 4. check if car is available for the provided time period
    const from = restructureDate(trip.tripStartDate);
    const to = restructureDate(trip.tripEndDate);

    const car = await Car.findOne({ _id: trip.vehicleId });

    const isAvailable = car.bookings.every(
      (booking) => booking.bookedTill <= from || booking.bookedFrom >= to
    );

    if (!isAvailable) {
      return NextResponse.json(
        {
          message: `Car is not available for the selected dates`,
        },
        { status: 400 }
      );
    }

    // 1. update trip
    trip.status = "Booked";
    await trip.save();

    // 2. update user
    const userId = await verifyProvidedToken(token);
    const user = await User.findOne({ _id: userId });

    user.myTrips.push({ tripId: trip._id });
    await user.save();

    // 3. update car
    const newBooking = {
      bookedFrom: from,
      bookedTill: to,
    };

    car.availabilityStatus = "Not available";
    car.bookings.push(newBooking);
    await car.save();

    // send confirmation email
    const emailOptions = {
      email: user.email,
      username: user.username,
      itineraryNumber: trip.itineraryNumber,
      tripStartDate: trip.tripStartDate,
      pickupTime: trip.pickupTime,
    };

    // send confirmation email
    // await sendConfirmationEmail(emailOptions);

    return NextResponse.json(
      {
        message: `Your trip has been booked successfully`,
        data: trip,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
