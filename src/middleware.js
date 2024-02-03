import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  console.log(token);

  const isAuthPath =
    path === "/signin" || "/signup" || "/emailVerification" || "/resetPassword";
  const isPrivatePath = path === "/checkout" || "/bookingConfirmation";

  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
}

export const config = {
  matcher: ["/checkout", "/bookingConfirmation"],
};
