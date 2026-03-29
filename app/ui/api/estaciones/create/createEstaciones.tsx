"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEstacion } from "@/app/lib/estaciones/create";

export default function EstacionForm() {
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
    const razonSocial = (form.elements.namedItem("razonSocial") as HTMLInputElement).value;
    const rfc = (form.elements.namedItem("rfc") as HTMLInputElement).value;
    const permisoCRE = (form.elements.namedItem("permisoCRE") as HTMLInputElement).value;
    const direccion = (form.elements.namedItem("direccion") as HTMLInputElement).value;
    const representante = (form.elements.namedItem("representante") as HTMLInputElement).value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value;

    try {
      await createEstacion({
        nombre,
        razonSocial,
        rfc,
        permisoCRE,
        direccion,
        representante,
        telefono,
      });

      setSuccess(true);
      form.reset();

      setTimeout(() => {
        router.push("/dashboard");
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
          <span className="inline-flex items-center gap-2 mb-4 rounded-full
                           border border-sky-200 bg-sky-50
                           px-4 py-1.5 text-xs font-semibold
                           text-sky-600 tracking-wide">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Nueva estación
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Registro de estación
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Registrar una estación de servicio en el sistema.
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
              Estación creada correctamente
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
              Nombre de la estación
            </label>
            <input
              name="nombre"
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* RAZON SOCIAL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Razón Social
            </label>
            <input
              name="razonSocial"
              required
              className="w-full rounded-md border border-slate-300
                         px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* RFC */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              RFC
            </label>
            <input
              name="rfc"
              required
              className="w-full rounded-md border border-slate-300
                         px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* PERMISO CRE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Permiso CRE
            </label>
            <input
              name="permisoCRE"
              required
              className="w-full rounded-md border border-slate-300
                         px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* DIRECCION */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Dirección
            </label>
            <input
              name="direccion"
              required
              className="w-full rounded-md border border-slate-300
                         px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* REPRESENTANTE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Representante
            </label>
            <input
              name="representante"
              required
              className="w-full rounded-md border border-slate-300
                         px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* TELEFONO */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Teléfono
            </label>
            <input
              name="telefono"
              required
              className="w-full rounded-md border border-slate-300
                         px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between
                          pt-6 border-t border-slate-200">
            <span className="text-xs text-slate-500">
              Registro oficial de estación
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
              {loading ? "Creando..." : "Crear estación"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}