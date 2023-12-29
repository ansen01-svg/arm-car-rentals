import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { password } = requestBody;

    // extract user token
    const token = NextRequest.cookies.get("token").value;

    // extract user details
    const tokenUser = jwt.verify(token, process.env.JWT_SECRET);

    // get user from database
    const user = await User.findOne({ _id: tokenUser.id });

    // update user password and save
    user.password = password;
    await user.save();

    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
