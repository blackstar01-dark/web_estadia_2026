export default async function getEstaciones() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estaciones`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Error al obtener estaciones');
  }

  return res.json();
}