"use client";

import { Bitacora } from "@/app/lib/type/bitacora";
import { useRouter } from "next/navigation";
import { FileText, ArrowRight } from "lucide-react";

interface Props {
  bitacoras: Bitacora[];
}

export const BitacoraTable: React.FC<Props> = ({ bitacoras }) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header interno */}
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
                  <span className="font-semibold text-gray-800">
                    {b.tipo}
                  </span>
                </td>

                {/* Estación */}
                <td className="px-6 py-5 text-gray-600">
                  {b.estacion?.nombre ?? "—"}
                </td>

                {/* Fecha */}
                <td className="px-6 py-5 text-gray-500">
                  {new Date(b.createdAt).toLocaleDateString("es-MX")}
                </td>

                {/* Acción */}
                <td className="px-6 py-5 text-center">
                  <button
                    onClick={() =>
                      router.push(
                        `/dashboard/admin/bitacoras/${b.id}/registro`
                      )
                    }
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md transition-all duration-200 group-hover:scale-105"
                  >
                    Ver registros
                    <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}

            {bitacoras.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  No hay bitácoras disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};