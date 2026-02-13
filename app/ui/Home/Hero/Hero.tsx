"use client"

import Link from "next/link"

export const Hero = () => {
  return (
    <section className="relative bg-white text-[#2E2E2E] overflow-hidden">

      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F7F9FB] to-white"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda */}
          <div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold text-[#0099CC] tracking-wide">
              <span className="h-2 w-2 rounded-full bg-[#0099CC]"></span>
              Cumplimiento normativo NOM-005-ASEA-2016
            </span>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#1F2933]">
              Sistema digital para la
              <span className="block text-[#0099CC] mt-2">
                gestión de bitácoras operativas
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-8 text-[#4B5563] text-lg leading-relaxed max-w-xl">
              Solución tecnológica diseñada para la captura, resguardo y
              consulta de bitácoras obligatorias en estaciones de servicio,
              garantizando integridad de la información y trazabilidad para
              auditorías y verificaciones oficiales.
            </p>

            {/* Acciones */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-[#0099CC] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0077AA] transition shadow-sm"
              >
                Acceder al sistema
              </Link>

              <Link
                href="/nom-005"
                className="inline-flex items-center justify-center rounded-md border border-[#0099CC] px-7 py-3.5 text-sm font-semibold text-[#0099CC] hover:bg-[#0099CC]/5 transition"
              >
                Consultar NOM-005
              </Link>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="hidden lg:block">
            <div className="rounded-lg border border-[#E5E7EB] bg-white p-8 shadow-sm">

              <h3 className="text-sm font-semibold text-[#1F2933] mb-6 uppercase tracking-wide">
                Características clave
              </h3>

              <ul className="space-y-4 text-sm text-[#4B5563]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0099CC]"></span>
                  Registros foliados e inalterables
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0099CC]"></span>
                  Fecha y hora automáticas del sistema
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0099CC]"></span>
                  Firma y responsabilidad de personal autorizado
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0099CC]"></span>
                  Registros no editables ni eliminables
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0099CC]"></span>
                  Preparado para auditorías y verificaciones
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
