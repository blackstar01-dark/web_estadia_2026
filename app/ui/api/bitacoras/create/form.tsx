"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBitacora } from "@/app/lib/bitacoras/create";
import { CreateBitacoraPayload, TipoBitacora } from "@/app/lib/type/bitacora";

type Estacion = {
  id: number;
  nombre: string;
  permisoCRE?: string;
};

export default function FormBitacora({
  estaciones,
}: {
  estaciones: Estacion[];
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;

    const payload: CreateBitacoraPayload = {
      tipo: (form.elements.namedItem("tipo") as HTMLSelectElement)
        .value as TipoBitacora,
      estacionId: Number(
        (form.elements.namedItem("estacionId") as HTMLSelectElement).value
      ),
    };

    try {
      await createBitacora(payload);
      setSuccess(true);
      form.reset();

      // Redirección controlada
      setTimeout(() => {
        router.push("/bitacoras");
        router.refresh();
      }, 1200);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0B1C2D] min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-2 mb-4 rounded-full
                           bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                           text-[#0099CC] tracking-wide">
            <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
            Nueva bitácora
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Registro de bitácora
          </h1>

          <p className="mt-4 max-w-2xl text-[#C7CCD1]">
            Cumplimiento conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-[#1E3A52]
                     bg-[#0F2A44]/70 backdrop-blur
                     p-8 space-y-6"
        >
          {/* SUCCESS */}
          {success && (
            <div className="rounded-md border border-emerald-500/30
                            bg-emerald-500/10 p-4 text-sm text-emerald-300">
              Bitácora creada correctamente
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="rounded-md border border-red-500/30
                            bg-red-500/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* TIPO */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#C7CCD1]">
              Tipo de bitácora
            </label>
            <select
              name="tipo"
              required
              className="w-full rounded-md border border-[#1E3A52]
                         bg-[#0B1C2D] px-4 py-2.5 text-sm text-white
                         focus:border-[#0099CC] focus:outline-none"
            >
              <option value="ACTIVIDADES_DIARIAS">Actividades diarias</option>
              <option value="DESCARGA_PIPAS">Descarga de pipas</option>
              <option value="OPERACION_MANTENIMIENTO">
                Operación y mantenimiento
              </option>
            </select>
          </div>

          {/* ESTACIÓN */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#C7CCD1]">
              Estación de servicio
            </label>
            <select
              name="estacionId"
              required
              className="w-full rounded-md border border-[#1E3A52]
                         bg-[#0B1C2D] px-4 py-2.5 text-sm text-white
                         focus:border-[#0099CC] focus:outline-none"
            >
              <option value="">Selecciona una estación</option>
              {estaciones.map((estacion) => (
                <option key={estacion.id} value={estacion.id}>
                  {estacion.nombre}
                  {estacion.permisoCRE
                    ? ` — ${estacion.permisoCRE}`
                    : ""}
                </option>
              ))}
            </select>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between
                          pt-6 border-t border-[#1E3A52]">
            <span className="text-xs text-[#7F8A96]">
              Registro inalterable y trazable
            </span>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center
                         rounded-md bg-[#0099CC] px-6 py-2.5
                         text-sm font-semibold text-white
                         transition hover:bg-[#0066A1]
                         disabled:opacity-50"
            >
              {loading ? "Creando..." : "Crear bitácora"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
