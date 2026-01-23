
export const getEstaciones = async () => {
  const res = await fetch(`${process.env.API_URL}/estaciones`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Error al obtener estaciones');
  }

  return res.json();
};
