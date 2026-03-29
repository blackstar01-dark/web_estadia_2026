import type { ProgramaMantenimiento } from "../type/programasMantenimiento";

export async function getProgramas(): Promise<{
  data?: ProgramaMantenimiento[];
  error?: string;
}> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/programa-mantenimiento`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔐 importante si usas cookies
        cache: "no-store", // 🔥 evita cache en Next
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
          "Error al obtener programas",
      };
    }

    return { data: data as ProgramaMantenimiento[] };
  } catch (error) {
    console.error(error);
    return { error: "Error al conectar con el backend" };
  }
}