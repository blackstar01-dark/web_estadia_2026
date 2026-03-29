import type { PlantillaMantenimiento } from "../type/plantilla";

export async function getPlantillas(): Promise<{ data?: PlantillaMantenimiento[]; error?: string }> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/plantillas-mantenimiento`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // si tu backend usa cookies de sesión
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      if (data?.message) {
        const msg = Array.isArray(data.message) ? data.message.join(", ") : data.message;
        return { error: msg };
      }
      return { error: `Error desconocido (status ${response.status})` };
    }

    return { data: data as PlantillaMantenimiento[] };
  } catch (err: any) {
    console.error("Error en getPlantillas:", err);
    return { error: "Error al conectar con el backend" };
  }
}