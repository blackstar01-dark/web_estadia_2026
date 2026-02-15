import type { Estacion } from "@/app/lib/type/estacion";

export type CreateEstacionPayload = {
  nombre: string;
  razonSocial: string;
  rfc: string;
  permisoCRE: string;
  direccion: string;
  representante: string;
  telefono?: string | null;
};

// Función para crear estación (usa cookie HttpOnly)
export async function createEstacion(
  payload: CreateEstacionPayload
): Promise<{ data?: Estacion; error?: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estaciones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include", // 🔹 importante para enviar cookies HttpOnly
    });

    // 🔹 Si no hay respuesta JSON válida
    let data: any;
    try {
      data = await response.json();
    } catch {
      return { error: `Backend no respondió JSON (status ${response.status})` };
    }

    // 🔹 Manejo de errores específicos
    if (!response.ok) {
      if (response.status === 401) {
        return { error: "No autorizado. Por favor inicia sesión." };
      }
      if (response.status === 403) {
        return { error: "Acceso denegado. Solo ADMIN puede crear estaciones." };
      }
      return { error: data.message || "Error desconocido al crear estación" };
    }

    return { data };
  } catch (error: any) {
    console.error(error);
    return { error: "Error al conectar con el backend" };
  }
}
