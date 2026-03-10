import type { PersonalAutorizado } from "../type/personalautorizado";

export type CreatePersonaPayload = {
  nombre: string;
  cargo: string;
  firmaHashPersona: string;
  estacionId: number;
};

export async function createPersonaAutorizada(
  payload: CreatePersonaPayload
): Promise<{ data?: PersonalAutorizado; error?: string }> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personalautorizado`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include", 
      }
    );

    let data: any;
    try {
      data = await response.json();
    } catch {
      return { error: `Backend no respondió JSON (${response.status})` };
    }

    if (!response.ok) {
      if (response.status === 401) {
        return { error: "No autorizado. Inicia sesión." };
      }
      if (response.status === 403) {
        return { error: "Acceso denegado." };
      }
      return { error: data.message || "Error al crear persona autorizada" };
    }

    return { data };
  } catch (error) {
    return { error: "Error al conectar con el backend" };
  }
}