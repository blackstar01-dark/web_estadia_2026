import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Llamada al backend NestJS
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error al iniciar sesión");
    }

    // Guardar token en cookie httpOnly
    const response = NextResponse.json({ message: "Login exitoso" });
    response.cookies.set({
      name: "token",
      value: data.access_token, // token devuelto por NestJS
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hora
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "Error al iniciar sesión" },
      { status: 401 }
    );
  }
}
