import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "No autenticado" }, { status: 401 });
    }

    const headers = { Authorization: `Bearer ${token}` };

    
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, { headers });

    if (res.ok) {
      const user = await res.json();
      return NextResponse.json({ ...user, type: "ADMIN" });
    }

    // 2. Intentar Personal
    res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authpersonal/profile`, { headers });

    if (res.ok) {
      const personal = await res.json();
      return NextResponse.json({ ...personal, type: "PERSONAL" });
    }

    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ message: "Error interno" }, { status: 500 });
  }
}