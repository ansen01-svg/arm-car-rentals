import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  const isAuthPath =
    path.includes("/signin") ||
    path.includes("/signup") ||
    path.includes("/resetPassword");

  const isPrivatePath =
    path.includes("/checkout") ||
    path.includes("/bookingConfirmation") ||
    path.includes("/emailVerification");

  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/emailVerification",
    "/resetPassword",
    "/checkout",
    "/bookingConfirmation",
  ],
};
