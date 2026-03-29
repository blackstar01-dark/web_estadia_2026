"use client";

import { useRouter } from "next/navigation";
import type { PlantillaMantenimiento } from "@/app/lib/type/plantilla";
import { ArrowRight } from "lucide-react";

interface Props {
  plantillas: PlantillaMantenimiento[];
}

export const PlantillaTable: React.FC<Props> = ({ plantillas }) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-3xl overflow-hidden">
      
      {/* Header */}
      <div className="px-8 py-6 border-b bg-gradient-to-r from-blue-50 to-white flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Lista de Plantillas
        </h2>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          
          {/* Head */}
          <thead className="bg-gray-50">
            <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="px-6 py-4">Numeral</th>
              <th className="px-6 py-4">Actividad</th>
              <th className="px-6 py-4">Periodicidad</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-100">
            {plantillas.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-blue-50/40 transition-all duration-200"
              >
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {p.numeralNom}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {p.actividad}
                </td>

                <td className="px-6 py-4 text-gray-600 font-medium">
                  {p.periodicidad}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      p.activa
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.activa ? "Activa" : "Inactiva"}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() =>
                      router.push(
                        `/dashboard/admin/programas/asignar/${p.id}`
                      )
                    }
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-blue-600 transition-all"
                  >
                    Asignar
                    <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}

            {/* Empty state */}
            {plantillas.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-16 text-center text-gray-400 text-sm"
                >
                  No hay plantillas registradas 🚫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};