import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";

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

    // Search for users that match the search term
    // const user = await User.find({ $text: { $search: searchTerm } });
    const user = await User.find({
      $or: [
        { username: { $regex: searchTerm, $options: "i" } },
        { email: { $regex: searchTerm, $options: "i" } },
        { role: { $regex: searchTerm, $options: "i" } },
      ],
    }).exec();

    // if no user is found
    if (user.length < 1) {
      return NextResponse.json(
        {
          message: "No user found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
