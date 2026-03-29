export async function findPlantilla(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/plantillas-mantenimiento/${id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!res.ok) throw new Error("Error al obtener plantilla");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}