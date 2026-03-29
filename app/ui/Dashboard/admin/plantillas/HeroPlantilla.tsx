"use client";

import { useEffect, useState } from "react";
import { PlantillaTable } from "./PlantillaTable";
import { getPlantillas } from "@/app/lib/plantillas/data";
import type { PlantillaMantenimiento } from "@/app/lib/type/plantilla";
import { CreateProgramaButton } from "./CreateProgramaButton";

export const HeroPlantillas: React.FC = () => {
  const [plantillas, setPlantillas] = useState<PlantillaMantenimiento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const { data, error } = await getPlantillas();
      if (error) setError(error);
      else if (data) setPlantillas(data);
      setLoading(false);
    })();
  }, []);

  const handleVerDetalle = (plantilla: PlantillaMantenimiento) => {
    console.log("Ver detalle:", plantilla);
    // Aquí puedes abrir modal o navegar a otra página
  };

  if (loading) return <p className="text-gray-500">Cargando plantillas...</p>;
  if (error)
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl">
        {error}
      </div>
    );

  return (
    <div className="space-y-6">
      {/* Header con botón */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Plantillas</h2>
        <CreateProgramaButton />
      </div>

      {/* Tabla */}
      <PlantillaTable plantillas={plantillas} />
    </div>
  );
};