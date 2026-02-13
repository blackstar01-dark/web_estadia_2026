import { NextRequest, NextResponse } from "next/server";
import { loginUsuario } from "@/app/lib/auth/login";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token } = await loginUsuario(body);

    // Guardamos el token en cookie httpOnly
    const res = NextResponse.json({ message: "Login exitoso" });
    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hora
    });

    return res;
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "Error al iniciar sesión" },
      { status: 401 }
    );
  }
}
