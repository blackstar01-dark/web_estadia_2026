import getEstacion from "@/app/lib/estaciones/find";
import { GetBitacorasEstacion } from "@/app/ui/api/estaciones/findEstacion";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; 
  const estacionId = Number(id);

  if (isNaN(estacionId)) {
    return <div>ID inválido</div>;
  }

  const estacion = await getEstacion(estacionId);

  if (!estacion) {
    return <div>No se encontró la estación</div>;
  }

  return (
    <GetBitacorasEstacion
      estacionId={estacionId}
      nombreEstacion={estacion.nombre}
    />
  );
}
