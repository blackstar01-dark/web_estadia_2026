export default async function getBitacoras() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bitacora`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Error al obtener bitacoras');
  }

  return res.json();
}
