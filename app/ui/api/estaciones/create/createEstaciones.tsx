"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEstacion, CreateEstacionPayload } from "@/app/lib/estaciones/create";
import type { Estacion } from "@/app/lib/type/estacion";

export default function FormEstacionAdmin() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [rfc, setRfc] = useState("");
  const [permisoCRE, setPermisoCRE] = useState("");
  const [direccion, setDireccion] = useState("");
  const [representante, setRepresentante] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload: CreateEstacionPayload = {
      nombre,
      razonSocial,
      rfc,
      permisoCRE,
      direccion,
      representante,
      telefono: telefono || null,
    };

    try {
      // ✅ No se pasa token, NestJS lo valida por cookie httpOnly
      const { data, error } = await createEstacion(payload);

      if (error) {
        setError(error);
        return;
      }

      setSuccess(true);

      // Limpiar formulario
      setNombre("");
      setRazonSocial("");
      setRfc("");
      setPermisoCRE("");
      setDireccion("");
      setRepresentante("");
      setTelefono("");

      // Redirigir después de 1.2s
      setTimeout(() => {
        router.push("/estaciones/index_estaciones");
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
            Nueva estación
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Registro de estación
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Solo los usuarios con rol <span className="text-sky-600 font-medium">ADMIN</span> pueden registrar estaciones.
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
              Estación creada correctamente
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="rounded-md border border-red-300
                            bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* NOMBRE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* RAZÓN SOCIAL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Razón Social</label>
            <input
              type="text"
              value={razonSocial}
              onChange={(e) => setRazonSocial(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* RFC */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">RFC</label>
            <input
              type="text"
              value={rfc}
              onChange={(e) => setRfc(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* PERMISO CRE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Permiso CRE</label>
            <input
              type="text"
              value={permisoCRE}
              onChange={(e) => setPermisoCRE(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* DIRECCIÓN */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Dirección</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* REPRESENTANTE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Representante</label>
            <input
              type="text"
              value={representante}
              onChange={(e) => setRepresentante(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* TELÉFONO */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Teléfono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full rounded-md border border-slate-300
                         bg-white px-4 py-2.5 text-sm
                         focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
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
              {loading ? "Creando..." : "Crear estación"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
