import type { PersonalAutorizado } from "../type/personalautorizado";

export async function getMyProfile(): Promise<{
  data?: PersonalAutorizado;
  error?: string;
}> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personalautorizado/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 ENVÍA COOKIE (JWT)
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
        error: data?.message || data?.error || "Error al obtener perfil",
      };
    }

    return { data: data as PersonalAutorizado };
  } catch (error) {
    console.error(error);
    return { error: "Error al conectar con el backend" };
  }
}