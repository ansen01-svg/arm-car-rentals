import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import sendVerificationEmail from "@/app/services/mailgun/password_reset_email";

connectDb();

export async function POST(request) {
  try {
    const reuqestBody = await request.json();
    const { email } = reuqestBody;

    // find user
    const user = await User.findOne({ email });

    // check if user is valid
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    // if user is valid-
    // create token
    const hashedToken = await bcrypt.hash(user._id.toString(), 10);

    // attach token to user
    user.passwordResetToken = hashedToken;
    user.passwordResetTokenExpiry = Date.now() + 3600000;
    await user.save();

    // send password reset email
    await sendVerificationEmail(email, "RESET-PASSWORD", hashedToken);

    return NextResponse.json(
      { message: "Reset password email has been sent" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
