import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authpersonal/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok) {
            
            return NextResponse.json(
                { message: data.message || "Error al iniciar sesión" },
                { status: res.status }
            );
        }

        
        const jwt = data.access_token || data.token;

        if (!jwt) {
            console.error("Backend Personal no envió token:", data);
            return NextResponse.json({ message: "Token no recibido" }, { status: 500 });
        }

        const response = NextResponse.json({ 
            message: "Login exitoso",
            user: data.persona 
        });

        response.cookies.set({
            name: "token", 
            value: jwt,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60,
        });

        return response;
    } catch (err: any) {
        return NextResponse.json(
            { message: "Error de conexión con el servidor" },
            { status: 500 }
        );
    }
}