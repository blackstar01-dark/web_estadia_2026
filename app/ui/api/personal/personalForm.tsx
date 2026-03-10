"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPersonaAutorizada } from "@/app/lib/personal/create";

type Estacion = {
  id: number;
  nombre: string;
  permisoCRE?: string;
};

export default function PersonalForm({
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

    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const cargo = (form.elements.namedItem("cargo") as HTMLInputElement).value;
    const firmaTexto = (form.elements.namedItem("firma") as HTMLInputElement).value;
    const estacionId = Number(
      (form.elements.namedItem("estacionId") as HTMLSelectElement).value
    );

    try {

      await createPersonaAutorizada({
        nombre,
        cargo,
        firmaHashPersona: firmaTexto,
        estacionId,
      });

      setSuccess(true);
      form.reset();

      setTimeout(() => {
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
                       border border-indigo-200 bg-indigo-50
                       px-4 py-1.5 text-xs font-semibold
                       text-indigo-600 tracking-wide"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Nuevo personal autorizado
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Registro de personal
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Asociar personal autorizado a estación registrada.
          </p>
        </header>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-slate-200
                     bg-white p-8 space-y-6
                     shadow-sm"
        >
          {success && (
            <div className="rounded-md border border-emerald-300
                            bg-emerald-50 p-4 text-sm text-emerald-700">
              Personal creado correctamente
            </div>
          )}

          {error && (
            <div className="rounded-md border border-red-300
                            bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* NOMBRE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Nombre completo
            </label>
            <input
              name="nombre"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* CARGO */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Cargo
            </label>
            <input
              name="cargo"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* FIRMA */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Firma (texto para generar hash)
            </label>
            <input
              name="firma"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-indigo-500 focus:outline-none"
            />
            <p className="text-xs text-slate-500 mt-1">
              Se almacenará como hash SHA-256.
            </p>
          </div>

          {/* ESTACIÓN */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Estación
            </label>
            <select
              name="estacionId"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-indigo-500 focus:outline-none"
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
              Registro seguro e inalterable
            </span>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center
                         rounded-md bg-indigo-600 px-6 py-2.5
                         text-sm font-semibold text-white
                         transition hover:bg-indigo-700
                         disabled:opacity-50"
            >
              {loading ? "Creando..." : "Crear personal"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}