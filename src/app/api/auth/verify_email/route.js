import connectDb from "@/mongo_config/mongo_config";
import { NextResponse } from "next/server";
import User from "@/models/user/user";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { token } = requestBody;

    // check if user with the token exist
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
    });

    // if user does not exist
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // update user and save
    user.isVerfied = true;
    user.verificationToken = "";
    user.verificationTokenExpiry = "";
    await user.save();

    return NextResponse.json(
      {
        message: "Your email has been successfully verified",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
