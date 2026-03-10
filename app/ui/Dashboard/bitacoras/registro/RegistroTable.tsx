"use client";

import { Registro } from "@/app/lib/type/registroBitacora";


interface Props {
  registros: Registro[];
}

export const RegistroTable: React.FC<Props> = ({ registros }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-50 to-white">
        <h2 className="text-lg font-semibold text-gray-800">
          Historial de Registros
        </h2>
        <p className="text-xs text-gray-500">
          Actividades registradas en esta bitácora
        </p>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-400 bg-gray-50">
              <th className="px-6 py-4">Folio</th>
              <th className="px-6 py-4">Descripción</th>
              <th className="px-6 py-4">Registrado por</th>
              <th className="px-6 py-4">Fecha</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {registros.map((r) => (
              <tr
                key={r.id}
                className="hover:bg-blue-50/40 transition"
              >
                <td className="px-6 py-5 font-semibold text-gray-800">
                  #{r.folio}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {r.descripcion}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {r.persona.nombre}
                </td>

                <td className="px-6 py-5 text-gray-500">
                  {new Date(r.createdAt).toLocaleDateString("es-MX")}
                </td>
              </tr>
            ))}

            {registros.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-gray-400"
                >
                  No hay registros en esta bitácora
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};