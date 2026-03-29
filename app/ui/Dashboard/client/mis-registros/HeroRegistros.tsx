"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMisRegistros } from "@/app/lib/registro_bitacora/mis-registros";
import { FileText, Plus } from "lucide-react";

export const HeroRegistros = () => {
  const [registros, setRegistros] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMisRegistros();

      if (res.error) {
        setError(res.error);
        setLoading(false);
        return;
      }

      setRegistros(res.data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  // 🔄 LOADING PRO (igual a loading.tsx)
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 bg-gray-200 rounded-lg"></div>
          <div className="h-10 w-40 bg-gray-200 rounded-xl"></div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          
          <div className="px-6 py-5 border-b bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-200 rounded-xl"></div>
              <div className="space-y-2">
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
                <div className="h-3 w-56 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-2xl">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Mis Registros
        </h1>

        <button
            onClick={() => router.push("/dashboard/client/mis-registros/create")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
            <Plus size={14} />
            Nuevo Registro
        </button>
      </div>

      {/* 📭 Sin datos */}
      {registros.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center text-gray-400 space-y-4">
          <p>No hay registros disponibles</p>

          <button
            onClick={() =>
              router.push("/dashboard/client/registros/create")
            }
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
          >
            <Plus size={14} />
            Crear primer registro
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* Header interno */}
          <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-50 to-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-xl">
                <FileText size={18} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Registros de Bitácora
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
                  <th className="px-6 py-4">Folio</th>
                  <th className="px-6 py-4">Descripción</th>
                  <th className="px-6 py-4">Fecha</th>
                  <th className="px-6 py-4">Bitácora</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {registros.map((r) => (
                  <tr key={r.id} className="hover:bg-blue-50/40 transition">
                    <td className="px-6 py-5 font-semibold text-gray-700">
                      #{r.folio}
                    </td>
                    <td className="px-6 py-5 text-gray-800">
                      {r.descripcion}
                    </td>
                    <td className="px-6 py-5 text-gray-500">
                      {new Date(r.fechaHora).toLocaleDateString("es-MX")}
                    </td>
                    <td className="px-6 py-5 text-gray-600">
                      {r.bitacora?.tipo ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};