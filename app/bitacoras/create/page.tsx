import { FormBitacora } from "@/app/ui/api/bitacoras/create";
import getEstaciones from "@/app/lib/estaciones/data";

export default async function Page() {
    const estaciones = await getEstaciones();
    return(
        <FormBitacora estaciones={estaciones} />
    )
}