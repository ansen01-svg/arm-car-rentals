import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";

connectDb();

export async function GET(request) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");

    // get userId
    const user = await User.find({ _id: userId });

    return NextResponse.json(
      {
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
