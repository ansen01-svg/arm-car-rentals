import { NextResponse } from "next/server";
import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { userId } = requestBody;

    // get userId
    const user = await User.findOne({ _id: userId });

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
