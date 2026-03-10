"use client";

import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("Error en bitácoras:", error);
  }, [error]);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        {/* ICON */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <span className="text-2xl text-red-600 font-bold">!</span>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-[#1F2933] mb-4">
          Ocurrió un error
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm text-[#6B7280] mb-8">
          No pudimos cargar las bitácoras en este momento.
          Verifica tu conexión o intenta nuevamente.
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="rounded-md bg-[#0099CC] px-6 py-2.5
                       text-sm font-semibold text-white
                       hover:bg-[#0077AA] transition"
          >
            Reintentar
          </button>

          <button
            onClick={() => window.location.href = "/dashboard"}
            className="rounded-md border border-gray-300 px-6 py-2.5
                       text-sm font-semibold text-gray-700
                       hover:bg-gray-100 transition"
          >
            Ir al dashboard
          </button>
        </div>

      </div>
    </section>
  );
}