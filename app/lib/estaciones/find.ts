
export default async function getfindEstacion(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estaciones/${id}`, {
        cache: "no-store",
    });
    
    if(!res.ok){
        throw new Error('Error al conseguir la estacion');
    }

    return res.json();
}