import { NextResponse } from "next/server";
import verifySession from "./app/_lib/global/data_access_layer";

const publicPath = ["/signin", "/signup", "/resetPassword"];
const privatePath = [
  "/trips",
  "/checkout",
  "/bookingConfirmation",
  "/emailVerification",
];
const adminPath = ["/fleet", "/users", "/bookings"];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  const session = await verifySession();

  const isPublicPath = publicPath.includes(path);
  const isPrivatePath = privatePath.includes(path);
  const isAdminPath = adminPath.includes(path);

  if (!session.username && !isPublicPath) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  if (isAdminPath && session?.role !== "Admin") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/emailVerification",
    "/resetPassword",
    "/trips",
    "/checkout",
    "/bookingConfirmation",
    "/fleet",
    "/users",
    "/bookings",
  ],
};
