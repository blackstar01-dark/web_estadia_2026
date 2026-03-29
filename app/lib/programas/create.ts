import type { ProgramaMantenimiento, CreateProgramaDto } from "../type/programasMantenimiento";

export async function createPrograma(
  payload: CreateProgramaDto
): Promise<{ data?: ProgramaMantenimiento; error?: string }> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/programa-mantenimiento`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      }
    );

    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    const message = Array.isArray(data?.message)
      ? data.message.join(", ")
      : data?.message;

    if (!response.ok) {
      if (response.status === 401)
        return { error: "No autorizado. Inicia sesión." };

      if (response.status === 403)
        return { error: "Acceso denegado." };

      if (response.status === 409)
        return { error: message || "Programa duplicado" };

      return { error: message || "Error al crear programa" };
    }

    return { data };
  } catch {
    return { error: "Error de conexión con el servidor" };
  }
}