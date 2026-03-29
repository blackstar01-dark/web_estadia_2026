import { RegistroBitacoraForm } from "@/app/ui/api/registro/create";
import findBitacora from "@/app/lib/bitacoras/find";
import { Bitacora } from "@/app/lib/type/bitacora";
import { BitacoraRegistro } from "@/app/lib/type/registroBitacora";

interface PageProps {
  params: Promise<{ id: string }>; // IMPORTANTE: es un Promise
  searchParams?: { estacionId?: string };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params; // desestructuramos el id
  const bitacoraId = Number(id);

  if (isNaN(bitacoraId)) {
    throw new Error("BitacoraId inválido");
  }

  // Obtener la bitácora desde el backend
  const bitacora: Bitacora & { registros?: BitacoraRegistro[]; estacion?: { id: number; nombre: string } } =
    await findBitacora(bitacoraId);

  const estacionId = Number(searchParams?.estacionId ?? bitacora.estacion?.id ?? 0);
  const estacionNombre = bitacora.estacion?.nombre ?? "No definido";

  return (
    <RegistroBitacoraForm
      bitacoraId={bitacoraId}
      estacionId={estacionId}
      estacionNombre={estacionNombre}
    />
  );
}