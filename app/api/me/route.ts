import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "No autenticado" }, { status: 401 });
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const user = await res.json();

    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ message: "Error interno" }, { status: 500 });
  }
}
