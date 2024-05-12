import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import User from "@/models/user/user";

connectDb();

export async function GET(request) {
  try {
    const users = await User.find({}).select(
      "-password -verificationToken -verificationTokenExpiry -passwordResetToken -passwordResetTokenExpiry -createdAt -updatedAt -__v"
    );

    return NextResponse.json(
      { message: "All users", data: users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
