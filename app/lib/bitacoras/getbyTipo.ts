export default async function getBitacoraByTipo(tipo: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bitacora/tipo/${tipo}`, {
        cache: "no-store"
    });
    
    if(!res.ok) {
        throw new Error('Error al obtener el tipo')
    }

    return res.json();
}