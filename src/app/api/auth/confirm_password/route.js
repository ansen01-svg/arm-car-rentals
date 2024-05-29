import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import User from "@/models/user/user";
import connectDb from "../../../../mongo_config/mongo_config";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { password, token } = requestBody;

    // get user from database
    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetTokenExpiry: { $gt: Date.now() },
    });

    // if user does not exist
    if (!user) {
      return NextResponse.json(
        { error: "Your password reset link has expired." },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // update user password and save
    user.password = hashedPassword;
    user.passwordResetToken = "";
    user.passwordResetTokenExpiry = "";
    await user.save();

    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
