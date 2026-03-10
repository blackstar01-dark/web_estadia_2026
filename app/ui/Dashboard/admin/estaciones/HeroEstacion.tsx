import { EstacionTable } from "./EstacionTable";
import { CreateEstacionButton } from "./CreateEstacionButton"
import getEstaciones from "@/app/lib/estaciones/data";

export const HeroEstacion = async () => {
  const estaciones = await getEstaciones();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Estaciones
        </h1>

        <CreateEstacionButton />
      </div>

      {/* Tabla */}
      <EstacionTable estaciones={estaciones} />
    </div>
  );
};