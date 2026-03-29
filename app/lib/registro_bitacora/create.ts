import type { RegistroBitacora, CreateRegistroBitacoraDto } from "../type/registroBitacora";

export async function createRegistroBitacora(
  payload: CreateRegistroBitacoraDto
): Promise<{ data?: RegistroBitacora; error?: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registrobitacora`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include", // 🔹 importante para enviar cookie HttpOnly
    });

    
    let data: any;
    try {
      data = await response.json();
    } catch {
      return { error: `Backend no respondió JSON (status ${response.status})` };
    }

    // 🔹 Manejo de errores según status
    if (!response.ok) {
      if (response.status === 401) return { error: "No autorizado. Por favor inicia sesión." };
      if (response.status === 403) return { error: "Acceso denegado." };
      return { error: data?.message || data?.error || "Error desconocido al crear registro" };
    }

    return { data: data as RegistroBitacora };
  } catch (error: any) {
    console.error(error);
    return { error: "Error al conectar con el backend" };
  }
}