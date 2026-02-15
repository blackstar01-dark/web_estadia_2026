import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cleanPath = pathname.replace(/\/$/, "");

  const cookieHeader = req.headers.get("cookie") || "";
  const token = cookieHeader
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  let decoded: any = null;

  // 🔹 Verificar token solo si existe
  if (token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      decoded = payload;
    } catch (err: any) {
      // 🔹 Token inválido o expirado → redirigir a login solo si no estamos ya ahí
      if (!cleanPath.startsWith("/auth/loginUsuario")) {
        return NextResponse.redirect(new URL("/auth/loginUsuario", req.url));
      }
    }
  }

  // 🔹 Evitar que un usuario autenticado acceda al login
  if (decoded && cleanPath.startsWith("/auth/loginUsuario")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 🔹 Rutas privadas de empleados
  if (!decoded && cleanPath.startsWith("/empleado") && !cleanPath.startsWith("/auth/loginUsuario")) {
    return NextResponse.redirect(new URL("/auth/loginUsuario", req.url));
  }

  // 🔹 Rutas privadas de creación de estaciones (solo ADMIN)
  if (cleanPath.startsWith("/estaciones/create")) {
    if (!decoded) {
      return NextResponse.redirect(new URL("/auth/loginUsuario", req.url));
    }
    if ((decoded.rol ?? "").toLowerCase() !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/login",
    "/auth/loginUsuario",
    "/empleado/:path*",
    "/estaciones/create",
    "/estaciones/create/:path*",
  ],
};
