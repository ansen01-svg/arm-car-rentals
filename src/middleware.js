import { NextResponse } from "next/server";
import verifySession from "./app/_lib/global/data_access_layer";

const adminPath = ["/fleet", "/users", "/bookings"];
const privatePath = ["/trips", "/checkout", "/bookingConfirmation"];
const publicPath = [
  "/signin",
  "/signup",
  "/verify_email",
  "/resetPassword",
  "/reset_password",
];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  const session = await verifySession();

  const isPublicPath = publicPath.includes(path);
  const isPrivatePath = privatePath.includes(path);
  const isAdminPath = adminPath.includes(path);

  console.log("middleware ran");

  // if (!session.username && !isPublicPath) {
  //   console.log("condition 1 ran");
  //   return NextResponse.redirect(new URL("/signin", request.nextUrl));
  // }

  // if user is logged in and tries to access public(auth) pages except for "/verify_email"
  if (isPublicPath && token && path !== "/verify_email") {
    console.log("public path mdlwre ran");
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // if user is not logged in and tries to access private pages
  if (isPrivatePath && !token) {
    console.log("private path mdlwre ran");
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  // if user is not admin and tries to access admin pages
  if (isAdminPath && session?.role !== "Admin") {
    console.log("admin path mdlwre ran");
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/not-found",
    "/signin",
    "/signup",
    "/verify_email",
    "/resetPassword",
    "/reset_password",
    "/trips",
    "/checkout",
    "/bookingConfirmation",
    "/fleet",
    "/users",
    "/bookings",
  ],
};
