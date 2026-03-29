"use client";

import { RegistroBitacora } from "@/app/lib/type/registroBitacora";
import { FileText } from "lucide-react";

interface Props {
  registros: RegistroBitacora[];
}

export const RegistroTable: React.FC<Props> = ({ registros }) => {
  if (!registros || registros.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center text-gray-400">
        No hay registros disponibles
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
              Registros
            </h2>
            <p className="text-xs text-gray-500">
              Historial de actividades registradas
            </p>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-400 bg-gray-50">
              <th className="px-6 py-4 font-medium">Descripción</th>
              <th className="px-6 py-4 font-medium">Bitácora</th>
              <th className="px-6 py-4 font-medium">Fecha</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {registros.map((r) => (
              <tr
                key={r.id}
                className="hover:bg-blue-50/40 transition-all duration-200"
              >
                {/* Descripción */}
                <td className="px-6 py-5">
                  <span className="font-semibold text-gray-800">
                    {r.descripcion}
                  </span>
                </td>

                {/* Bitácora */}
                <td className="px-6 py-5 text-gray-600">
                  {r.bitacoraId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};