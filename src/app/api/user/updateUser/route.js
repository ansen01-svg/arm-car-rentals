import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import User from "@/models/user/user";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { userId, role } = requestBody;

    // check is user is authorized(is admin)
    await authCheck(request);

    const user = await User.findOne({ _id: userId });

    // update user role
    if (role) {
      user.role = role;
    }

    await user.save();

    return NextResponse.json(
      { message: `User with id ${userId} has been successfully updated.` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
