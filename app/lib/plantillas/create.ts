import type { CreatePlantillaMantenimientoDto } from "../type/plantilla";
import type { PlantillaMantenimiento } from "../type/plantilla";

export async function createPlantilla(
  payload: CreatePlantillaMantenimientoDto
): Promise<{ data?: PlantillaMantenimiento; error?: string }> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/plantillas-mantenimiento`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      // Manejo de errores de NestJS
      if (data?.message) {
        // data.message puede ser string o array
        const msg = Array.isArray(data.message) ? data.message.join(", ") : data.message;
        return { error: msg };
      }
      return { error: `Error desconocido (status ${response.status})` };
    }

    return { data: data as PlantillaMantenimiento };
  } catch (err: any) {
    console.error("Error en createPlantilla:", err);
    return { error: "Error al conectar con el backend" };
  }
}