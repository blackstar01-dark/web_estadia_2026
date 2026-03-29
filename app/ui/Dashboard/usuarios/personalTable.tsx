"use client";

import { PersonalAutorizado } from "@/app/lib/type/personalautorizado";

interface Props {
  personal: PersonalAutorizado[];
}

export const PersonalTable: React.FC<Props> = ({ personal }) => {
  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-3xl overflow-hidden">
      
      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          
          {/* Encabezado */}
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Cargo</th>
              <th className="px-6 py-4">Estación</th>
              <th className="px-6 py-4">Creado por</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {personal.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-blue-50/30 transition-colors duration-200"
              >
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {p.nombre}
                </td>

                <td className="px-6 py-4 text-gray-700 font-medium">
                  {p.cargo}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {p.estacion?.nombre ?? "—"}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {p.creadoPor?.nombre ?? "—"}
                </td>
              </tr>
            ))}

            {personal.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-400 text-sm">
                  No hay personal registrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};