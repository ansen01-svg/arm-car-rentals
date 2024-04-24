import { NextResponse } from "next/server";
import connectDb from "@/mongo_config/mongo_config";
import User from "@/models/user/user";
import authCheck from "@/app/_lib/backend/authorizationMiddleware";

connectDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { userId } = requestBody;

    // check is user is authorized(is admin)
    await authCheck(request);

    // delete user
    await User.fintOneAndDelete({ _id: userId });

    return NextResponse.json(
      { message: `User with id ${userId} has been successfully deleted` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
