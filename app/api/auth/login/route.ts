import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "Credenciales incorrectas" },
        { status: res.status }
      );
    }

    
    const jwt = data.access_token || data.token; 

    if (!jwt) {
      console.error("El backend no devolvió un token. Data recibida:", data);
      return NextResponse.json({ message: "Error en formato de token" }, { status: 500 });
    }

    const response = NextResponse.json({ 
      message: "Login exitoso",
      user: data.user // Opcional: devolver info del usuario al cliente
    });

    response.cookies.set({
      name: "token", // Este nombre DEBE coincidir con request.cookies.token en el Guard
      value: jwt,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hora
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error de conexión con el servidor" },
      { status: 500 }
    );
  }
}
