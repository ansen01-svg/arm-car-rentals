import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";
import { NextResponse } from "next/server";

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
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // update user password and save
    user.password = password;
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
