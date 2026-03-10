import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cleanPath = pathname.replace(/\/$/, "");

  // 🔹 Permitir rutas públicas
  if (
    cleanPath.startsWith("/auth/loginUsuario") ||
    cleanPath.startsWith("/auth/login")
  ) {
    return NextResponse.next();
  }

  const cookieHeader = req.headers.get("cookie") || "";
  const token = cookieHeader
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  // 🔹 Si no hay token → login
  if (!token) {
    return NextResponse.redirect(
      new URL("/auth/loginUsuario", req.url)
    );
  }

  let decoded: any;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    decoded = payload;
  } catch {
    return NextResponse.redirect(
      new URL("/auth/loginUsuario", req.url)
    );
  }

  const role = (decoded.rol ?? "").toLowerCase();

  
  if (cleanPath === "/dashboard") {
    if (role === "admin") {
      return NextResponse.redirect(
        new URL("/dashboard/admin", req.url)
      );
    } else {
      return NextResponse.redirect(
        new URL("/dashboard/client", req.url)
      );
    }
  }

  // 🔐 Proteger dashboard por rol
  if (cleanPath.startsWith("/dashboard/admin") && role !== "admin") {
    return NextResponse.redirect(
      new URL("/dashboard/usuario", req.url)
    );
  }

  if (cleanPath.startsWith("/dashboard/usuario") && role !== "usuario") {
    return NextResponse.redirect(
      new URL("/dashboard/admin", req.url)
    );
  }

  // 🔐 Solo admin puede crear estaciones
  if (cleanPath.startsWith("/estaciones/create") && role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/estaciones/create/:path*",
    "/perfil/:path*",
    "/empleado/:path*",
  ],
};
