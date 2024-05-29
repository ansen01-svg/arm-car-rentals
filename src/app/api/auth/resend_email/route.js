import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/user/user";
import connectDb from "../../../../mongo_config/mongo_config";
import sendVerificationEmail from "@/app/services/brevo/verificationEmail";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { token } = requestBody;

    // check if all the credentials are provided
    if (!token) {
      return NextResponse.json(
        { error: "Please provide all the credentials" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ verificationToken: token });

    // if user is already verified or token is invalid
    if (!user) {
      return NextResponse.json(
        { error: "User is verified or does not exists" },
        { status: 400 }
      );
    }

    // create token
    const hashedToken = await bcryptjs.hash(user._id.toString(), 10);

    // attach verification tokens and expiry to the user and save
    user.verificationToken = hashedToken;
    user.verificationTokenExpiry = new Date(Date.now() + 172800000);
    await user.save();

    // send mail
    await sendVerificationEmail(user.email, "VERIFY-EMAIL", hashedToken);

    return NextResponse.json({
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
