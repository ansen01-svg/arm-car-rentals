import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDb from "../../../../mongo_config/mongo_config";
import User from "@/models/user/user";
import sendVerificationEmail from "@/app/services/brevo/verificationEmail";

connectDb();

export async function POST(request) {
  try {
    const reuqestBody = await request.json();
    const { email } = reuqestBody;

    // find user
    const user = await User.findOne({ email });

    // check if user is valid
    if (!user) {
      return NextResponse.json(
        { error: "Cannot find a user with this email." },
        { status: 400 }
      );
    }

    // if user is valid-
    // create token
    const hashedToken = await bcrypt.hash(user._id.toString(), 10);

    // attach token to user
    user.passwordResetToken = hashedToken;
    user.passwordResetTokenExpiry = new Date(Date.now() + 172800000);
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
