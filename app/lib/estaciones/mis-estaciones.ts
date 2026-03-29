import type { Estacion } from "../type/estacion";

export async function getMisEstaciones(): Promise<{
  data?: Estacion[];
  error?: string;
}> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/estaciones/mis-estaciones`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
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

    // 🔐 manejo de errores
    if (!response.ok) {
      if (response.status === 401)
        return { error: "No autorizado. Inicia sesión." };

      if (response.status === 403)
        return { error: "Acceso denegado." };

      return {
        error:
          data?.message ||
          data?.error ||
          "Error al obtener registros",
      };
    }

    return { data: data as Estacion[] };
  } catch (error) {
    console.error(error);
    return { error: "Error al conectar con el backend" };
  }
}