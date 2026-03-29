import { notFound } from "next/navigation";
import { findPlantilla } from "@/app/lib/plantillas/find";
import getEstaciones from "@/app/lib/estaciones/data";
import { CreateProgramaForm } from "@/app/ui/Dashboard/admin/plantillas/asignar";

interface Props {
  params: Promise<{ id: string }>; // params ES una Promise en Next16+
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) return notFound();

  const plantilla = await findPlantilla(numericId);
  if (!plantilla) return notFound();

  const estaciones = await getEstaciones();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Asignar Programa
          </h1>
          <p className="text-gray-500 mt-1">
            Vincula una plantilla de mantenimiento a una estación
          </p>
        </div>
        <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          Plantilla #{plantilla.id}
        </span>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Información de la plantilla
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-xs text-gray-500 uppercase">Numeral</p>
            <p className="text-lg font-bold text-gray-900">{plantilla.numeralNom}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-xs text-gray-500 uppercase">Actividad</p>
            <p className="text-sm font-medium text-gray-800">{plantilla.actividad}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-xs text-gray-500 uppercase">Periodicidad</p>
            <span className="inline-block mt-1 px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full">
              {plantilla.periodicidad}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
        <CreateProgramaForm plantillaId={plantilla.id} estaciones={estaciones} />
      </div>
    </main>
  );
}