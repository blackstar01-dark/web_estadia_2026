export default async function start() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/starts`, {
    cache: 'no-store',
  });

  console.log('API status:', res.status);

  if (!res.ok) {
    throw new Error(`Error al obtener stats del dashboard: ${res.status}`);
  }

  return res.json();
}
