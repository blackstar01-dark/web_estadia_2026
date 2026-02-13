// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Si ya hay token e intenta ir a /auth/login → dashboard
  if (token && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Si no hay token y quiere entrar a /empleado → login
  if (!token && pathname.startsWith("/empleado")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/empleado/:path*"],
};
