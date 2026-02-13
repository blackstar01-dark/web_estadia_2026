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

      setTimeout(() => {
        router.push("/bitacoras");
        router.refresh();
      }, 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white min-h-screen text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="mb-12">
          <span
            className="inline-flex items-center gap-2 mb-4 rounded-full
                       border border-sky-200 bg-sky-50
                       px-4 py-1.5 text-xs font-semibold
                       text-sky-600 tracking-wide"
          >
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Nueva bitácora
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Registro de bitácora
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Cumplimiento conforme a la{" "}
            <span className="text-sky-600 font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-slate-200
                     bg-white p-8 space-y-6
                     shadow-sm"
        >
          {/* SUCCESS */}
          {success && (
            <div className="rounded-md border border-emerald-300
                            bg-emerald-50 p-4 text-sm text-emerald-700">
              Bitácora creada correctamente
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="rounded-md border border-red-300
                            bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* TIPO */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Tipo de bitácora
            </label>
            <select
              name="tipo"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            >
              <option value="ACTIVIDADES_DIARIAS">
                Actividades diarias
              </option>
              <option value="DESCARGA_PIPAS">
                Descarga de pipas
              </option>
              <option value="OPERACION_MANTENIMIENTO">
                Operación y mantenimiento
              </option>
            </select>
          </div>

          {/* ESTACIÓN */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Estación de servicio
            </label>
            <select
              name="estacionId"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
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
                          pt-6 border-t border-slate-200">
            <span className="text-xs text-slate-500">
              Registro inalterable y trazable
            </span>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center
                         rounded-md bg-sky-600 px-6 py-2.5
                         text-sm font-semibold text-white
                         transition hover:bg-sky-700
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
