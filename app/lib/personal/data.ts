export default async function getPersonal() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/personalautorizado`, {
        cache: "no-store"
    });

    if(!res.ok) {
        throw new Error("Error al obtener personal autorizado");
    }

    return res.json();
}