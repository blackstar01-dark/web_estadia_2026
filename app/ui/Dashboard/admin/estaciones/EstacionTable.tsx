"use client";

import { Estacion } from "@/app/lib/type/estacion";
import { format } from "date-fns";

interface Props {
  estaciones: Estacion[];
  onVerDetalle?: (estacion: Estacion) => void; // callback para el botón
}

export const EstacionTable: React.FC<Props> = ({ estaciones, onVerDetalle }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-50 to-white flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Lista de Estaciones</h2>
          <p className="text-xs text-gray-500">
            Todas las estaciones registradas en el sistema
          </p>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-400 bg-gray-50">
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Razón Social</th>
              <th className="px-6 py-4">RFC</th>
              <th className="px-6 py-4">Permiso CRE</th>
              <th className="px-6 py-4">Dirección</th>
              <th className="px-6 py-4">Representante</th>
              <th className="px-6 py-4">Teléfono</th>
              <th className="px-6 py-4">Creada</th>
              <th className="px-6 py-4">Acciones</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {estaciones.map((e) => (
              <tr
                key={e.id}
                className="hover:bg-blue-50/30 transition-all duration-150"
              >
                <td className="px-6 py-4 font-semibold text-gray-800">{e.nombre}</td>
                <td className="px-6 py-4 text-gray-600">{e.razonSocial}</td>
                <td className="px-6 py-4 text-gray-600">{e.rfc}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    {e.permisoCRE}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{e.direccion}</td>
                <td className="px-6 py-4 text-gray-600">{e.representante}</td>
                <td className="px-6 py-4 text-gray-600">{e.telefono ?? "—"}</td>
                <td className="px-6 py-4 text-gray-500">
                  {format(new Date(e.createdAt), "dd/MM/yyyy")}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onVerDetalle?.(e)}
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition"
                  >
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))}

            {estaciones.length === 0 && (
              <tr>
                <td colSpan={9} className="px-6 py-12 text-center text-gray-400">
                  No hay estaciones registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};