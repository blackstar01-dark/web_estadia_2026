"use client"

import Link from "next/link"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">

      {/* Fondo decorativo suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      {/* Glow institucional sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full
                           border border-sky-200 bg-sky-50
                           px-4 py-1 text-xs font-semibold
                           tracking-wide text-sky-600">
            Sistema normativo · NOM-005-ASEA-2016
          </span>

          {/* Título */}
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Gestión digital de <br />
            <span className="text-sky-600">
              bitácoras para estaciones
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Plataforma diseñada para el registro, control y resguardo de
            bitácoras operativas obligatorias en estaciones de servicio,
            garantizando integridad, trazabilidad y cumplimiento normativo
            sin alterar el proceso operativo existente.
          </p>

          {/* Beneficios */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="text-sky-600">✔</span>
              Registros foliados e inalterables
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sky-600">✔</span>
              Fecha y hora automáticas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sky-600">✔</span>
              Personas autorizadas y firmas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sky-600">✔</span>
              Listo para auditoría ASEA
            </li>
          </ul>

          {/* Acciones */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/estaciones/create"
              className="inline-flex items-center justify-center
                         rounded-md bg-sky-600 px-6 py-3
                         text-sm font-semibold text-white
                         hover:bg-sky-700 transition"
            >
              Acceder al sistema
            </Link>

            <Link
              href="estaciones/index_estaciones"
              className="inline-flex items-center justify-center
                         rounded-md border border-slate-300
                         px-6 py-3 text-sm font-semibold
                         text-slate-700
                         hover:border-sky-600
                         hover:text-sky-600 transition"
            >
              Ver estaciones
            </Link>
          </div>

          {/* Footer info */}
          <p className="mt-10 text-xs text-slate-500">
            Desarrollo tecnológico para cumplimiento normativo ·
            Figueroa González y Asociados, S. C.
          </p>

        </div>
      </div>
    </section>
  )
}
