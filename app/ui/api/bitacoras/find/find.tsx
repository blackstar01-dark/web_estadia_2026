"use client";

import { useRouter } from "next/navigation";
import { Bitacora } from "@/app/lib/type/bitacora";
import { BitacoraRegistro } from "@/app/lib/type/registroBitacora";

interface Props {
  bitacora: Bitacora & {
    registros?: BitacoraRegistro[];
    estacion?: { id: number; nombre: string };
  };
}

// 🔥 función para arreglar fechas
function formatFecha(fecha: string) {
  if (!fecha) return "Sin fecha";

  const iso = fecha.includes("T") ? fecha : fecha.replace(" ", "T");
  const parsed = new Date(iso);

  if (isNaN(parsed.getTime())) return "Fecha inválida";

  return parsed.toLocaleString("es-MX");
}

export const FindBitacora = ({ bitacora }: Props) => {
  const registros: BitacoraRegistro[] = bitacora.registros ?? [];

  return (
    <section className="bg-white min-h-screen text-[#1F2933]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold text-[#0099CC]">
              <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
              Bitácora #{bitacora.id}
            </span>
            <h1 className="text-3xl font-bold tracking-tight">
              {bitacora.tipo}
            </h1>
            <p className="mt-2 text-[#4B5563]">
              Estación:{" "}
              <span className="text-[#1F2933] font-medium">
                {bitacora.estacion?.nombre ?? "No definido"}
              </span>
            </p>
          </div>
        </header>

        {/* LISTA DE REGISTROS */}
        {registros.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
            No hay registros en esta bitácora.
          </div>
        ) : (
          <div className="space-y-6">
            {registros.map((registro) => (
              <article
                key={registro.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[#0099CC] hover:shadow-[0_10px_30px_-12px_rgba(0,153,204,0.35)]"
              >
                {/* TOP */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">
                    Folio #{registro.folio}
                  </span>

                  {/* ✅ AQUÍ ESTÁ EL FIX REAL */}
                  <span className="text-xs text-gray-500">
                    {formatFecha((registro as any).fechaHora)}
                  </span>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-[#374151] leading-relaxed mb-4">
                  {registro.descripcion}
                </p>

                {/* MANTENIMIENTO */}
                {registro.tipo === "OPERACION_MANTENIMIENTO" &&
                  registro.mantenimiento && (
                    <div className="mb-4 text-sm text-gray-600 space-y-1">
                      <p>
                        <strong>Tipo:</strong>{" "}
                        {registro.mantenimiento.tipo}
                      </p>
                      <p>
                        <strong>Actividad:</strong>{" "}
                        {registro.mantenimiento.actividad}
                      </p>
                      {registro.mantenimiento.observaciones && (
                        <p>
                          <strong>Observaciones:</strong>{" "}
                          {registro.mantenimiento.observaciones}
                        </p>
                      )}
                    </div>
                  )}

                {/* DESCARGA */}
                {registro.tipo === "DESCARGA_PIPAS" &&
                  registro.descarga && (
                    <div className="mb-4 text-sm text-gray-600 space-y-1">
                      <p>
                        <strong>Pipa:</strong>{" "}
                        {registro.descarga.numeroPipa}
                      </p>
                      <p>
                        <strong>Producto:</strong>{" "}
                        {registro.descarga.producto}
                      </p>
                      <p>
                        <strong>Volumen recibido:</strong>{" "}
                        {registro.descarga.volumenRecibido}
                      </p>
                      <p>
                        <strong>Proveedor:</strong>{" "}
                        {registro.descarga.proveedor}
                      </p>
                    </div>
                  )}

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#4B5563]">
                    Responsable:
                    <span className="text-[#1F2933] font-medium ml-1">
                      {registro.persona?.nombre ?? "No definido"}
                    </span>
                  </span>

                  {registro.persona?.cargo && (
                    <span className="rounded-full bg-[#0099CC]/10 px-3 py-1 text-xs text-[#0099CC]">
                      {registro.persona.cargo}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};