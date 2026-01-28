"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCcw, ArrowLeft } from "lucide-react";

export default function ErrorBitacoraDetalle({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="bg-[#0B1C2D] min-h-screen flex items-center justify-center px-6">
      <div
        className="w-full max-w-md rounded-2xl
                   border border-[#1E3A52]
                   bg-[#0F2A44]/80 backdrop-blur
                   p-8 text-center space-y-6
                   animate-fade-in"
      >
        {/* ICON */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center
                        rounded-full bg-red-500/10 text-red-400">
          <AlertTriangle size={28} />
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-white">
          Error al cargar la bitácora
        </h1>

        {/* DESC */}
        <p className="text-sm text-[#C7CCD1] leading-relaxed">
          No fue posible obtener la información de esta bitácora.
          Puede que no exista o que el servidor no esté disponible.
        </p>

        {/* DEV ERROR */}
        {process.env.NODE_ENV === "development" && (
          <pre
            className="text-xs text-red-300 bg-red-500/10
                       border border-red-500/20 rounded-lg
                       p-3 overflow-auto text-left"
          >
            {error.message}
          </pre>
        )}

        {/* ACTIONS */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2
                       rounded-md bg-[#0099CC]
                       px-5 py-2.5 text-sm font-semibold text-white
                       hover:bg-[#0066A1] transition"
          >
            <RefreshCcw size={16} />
            Reintentar
          </button>

          <Link
            href="/bitacoras"
            className="inline-flex items-center justify-center gap-2
                       rounded-md border border-[#1E3A52]
                       px-5 py-2.5 text-sm text-[#C7CCD1]
                       hover:border-[#0099CC]
                       hover:text-white transition"
          >
            <ArrowLeft size={16} />
            Volver a bitácoras
          </Link>
        </div>
      </div>
    </section>
  );
}
