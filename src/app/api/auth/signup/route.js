import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import sendVerificationEmail from "@/app/services/mailgun/password_reset_email";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { username, email, password } = requestBody;

    // check if all the credentials are provided
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Please provide all the credentials" },
        { status: 400 }
      );
    }

    //check if user already exists
    const user = await User.findOne({ email });

    // if user already exist-
    if (user) {
      return NextResponse.json(
        { error: "Account already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create user
    let newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    // create token
    const hashedToken = await bcryptjs.hash(newUser._id.toString(), 10);

    // attach verification tokens and expiry to the user and save
    newUser.verificationToken = hashedToken;
    newUser.verificationTokenExpiry = Date.now() + 3600000;
    await newUser.save();

    // send mail
    await sendVerificationEmail(email, "VERIFY-EMAIL", hashedToken);

    return NextResponse.json({
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
