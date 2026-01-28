import { CreateBitacoraPayload, ApiErrorResponse } from "../type/bitacora";

export async function createBitacora(
  payload: CreateBitacoraPayload
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bitacora`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    let errorMessage = "Error al crear bitácora";

    try {
      const error: ApiErrorResponse = await res.json();

      if (Array.isArray(error.message)) {
        errorMessage = error.message.join(", ");
      } else if (typeof error.message === "string") {
        errorMessage = error.message;
      }
    } catch {
      
    }

    throw new Error(errorMessage);
  }

  return res.json();
}
