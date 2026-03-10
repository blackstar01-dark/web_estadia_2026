export default async function getBitacorasEstacion(estacionId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bitacora/estacion/${estacionId}`,
    { cache: "no-store" }
  );

  console.log("STATUS:", res.status);

  const data = await res.json();
  console.log("DATA:", data);

  return data;
}
