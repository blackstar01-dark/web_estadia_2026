"use client";

import { useEffect, useState } from "react";
import { Bitacora } from "@/app/lib/type/bitacora";
import { useRouter } from "next/navigation";
import { FileText, ArrowRight } from "lucide-react";
import { getMisBitacoras } from "@/app/lib/bitacoras/mis-bitacoras";

export const BitacoraTableDynamic: React.FC = () => {
  const router = useRouter();
  const [bitacoras, setBitacoras] = useState<Bitacora[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Cargar bitácoras al montar
  useEffect(() => {
    const fetchBitacoras = async () => {
      try {
        const { data, error } = await getMisBitacoras();
        if (error) {
          setError(error);
          setBitacoras([]);
        } else if (data) {
          setBitacoras(data);
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar bitácoras");
      } finally {
        setLoading(false);
      }
    };

    fetchBitacoras();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-10 text-gray-500">
        Cargando bitácoras...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 text-red-500">
        {error}
      </div>
    );
  }

  if (bitacoras.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center text-gray-400">
        No hay bitácoras disponibles
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-xl">
            <FileText size={18} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Bitácoras Disponibles
            </h2>
            <p className="text-xs text-gray-500">
              Selecciona una bitácora para ver los registros
            </p>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-400 bg-gray-50">
              <th className="px-6 py-4 font-medium">Tipo</th>
              <th className="px-6 py-4 font-medium">Estación</th>
              <th className="px-6 py-4 font-medium">Creada</th>
              <th className="px-6 py-4 text-center font-medium">Acción</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {bitacoras.map((b) => (
              <tr
                key={b.id}
                className="group hover:bg-blue-50/40 transition-all duration-200"
              >
                {/* Tipo */}
                <td className="px-6 py-5">
                  <span className="font-semibold text-gray-800">{b.tipo}</span>
                </td>

                {/* Estación */}
                <td className="px-6 py-5 text-gray-600">
                  {b.estacion?.nombre ?? "—"}
                </td>

                {/* Fecha */}
                <td className="px-6 py-5 text-gray-500">
                  {new Date(b.createdAt).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>

                {/* Acción */}
                <td className="px-6 py-5 text-center">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/client/bitacoras/${b.id}/registros`)
                    }
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md transition-all duration-200 group-hover:scale-105"
                  >
                    Ver registros
                    <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};