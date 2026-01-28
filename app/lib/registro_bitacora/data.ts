export default async function getRegistroBitacora() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registro_bitacora`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Error al obtener registro bitacora');
    }

    return res.json();
}