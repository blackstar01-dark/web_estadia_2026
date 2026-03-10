import { cookies } from "next/headers";

export default async function getRegistrosByBitacora(
  bitacoraId: number
) {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("No token found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/registrobitacora/bitacora/${bitacoraId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener registros");
  }

  return res.json();
}