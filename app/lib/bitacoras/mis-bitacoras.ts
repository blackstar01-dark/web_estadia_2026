import type { Bitacora } from "../type/bitacora";

export async function getMisBitacoras(): Promise<{
  data?: Bitacora[];
  error?: string;
}> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bitacora/mis-bitacoras`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔑 esto envía las cookies
      }
    );

    let data: any;
    try {
      data = await response.json();
    } catch {
      return {
        error: `Backend no respondió JSON (status ${response.status})`,
      };
    }

    if (!response.ok) {
      if (response.status === 401) return { error: "No autorizado. Inicia sesión." };
      if (response.status === 403) return { error: "Acceso denegado." };
      return { error: data?.message || data?.error || "Error al obtener bitácoras" };
    }

    return { data: data as Bitacora[] };
  } catch (error) {
    console.error(error);
    return { error: "Error al conectar con el backend" };
  }
}