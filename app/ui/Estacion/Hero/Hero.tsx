"use client"

import Link from "next/link"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1C2D] text-white">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44] via-[#0B1C2D] to-[#081521]"></div>

      {/* Glow sutil corporativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,153,204,0.12),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-[#0099CC]/30 bg-[#0099CC]/10 px-4 py-1 text-xs font-semibold tracking-wide text-[#0099CC]">
            Sistema normativo · NOM-005-ASEA-2016
          </span>

          {/* Título */}
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Gestión digital de <br />
            <span className="text-[#0099CC]">
              bitácoras para estaciones
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 text-lg text-[#C7CCD1] leading-relaxed">
            Plataforma diseñada para el registro, control y resguardo de
            bitácoras operativas obligatorias en estaciones de servicio,
            garantizando integridad, trazabilidad y cumplimiento normativo
            sin alterar el proceso operativo existente.
          </p>

          {/* Beneficios */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#AEB6BE]">
            <li className="flex items-center gap-2">
              <span className="text-[#0099CC]">✔</span>
              Registros foliados e inalterables
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#0099CC]">✔</span>
              Fecha y hora automáticas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#0099CC]">✔</span>
              Personas autorizadas y firmas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#0099CC]">✔</span>
              Listo para auditoría ASEA
            </li>
          </ul>

          {/* Acciones */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-[#0099CC] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0066A1] transition"
            >
              Acceder al sistema
            </Link>

            <Link
              href="estaciones/index_estaciones"
              className="inline-flex items-center justify-center rounded-md border border-[#3A4A5A] px-6 py-3 text-sm font-semibold text-[#C7CCD1] hover:border-[#0099CC] hover:text-[#0099CC] transition"
            >
              Ver estaciones
            </Link>
          </div>

          {/* Footer info */}
          <p className="mt-10 text-xs text-[#7F8A96]">
            Desarrollo tecnológico para cumplimiento normativo ·
            Figueroa González y Asociados, S. C.
          </p>

        </div>
      </div>
    </section>
  )
}
