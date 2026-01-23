"use client"

import Link from "next/link"

export const Hero = () => {
  return (
    <section className="relative bg-[#0B1C2D] text-white overflow-hidden">
      
      {/* Fondo sutil institucional */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44] via-[#0B1C2D] to-[#081521]"></div>

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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Sistema digital para la
              <span className="block text-[#0099CC] mt-2">
                gestión de bitácoras operativas
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-8 text-[#C7CCD1] text-lg leading-relaxed max-w-xl">
              Solución tecnológica diseñada para la captura, resguardo y
              consulta de bitácoras obligatorias en estaciones de servicio,
              asegurando la integridad de los registros y la trazabilidad
              requerida para auditorías y verificaciones oficiales.
            </p>

            {/* Acciones */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-[#0099CC] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0066A1] transition"
              >
                Acceder al sistema
              </Link>

              <Link
                href="/documentacion"
                className="inline-flex items-center justify-center rounded-md border border-[#3A4A5A] px-7 py-3.5 text-sm font-semibold text-[#C7CCD1] hover:border-[#0099CC] hover:text-[#0099CC] transition"
              >
                Consultar NOM-005
              </Link>
            </div>
          </div>

          {/* Columna derecha - Panel informativo */}
          <div className="hidden lg:block">
            <div className="rounded-lg border border-[#1E3A52] bg-[#0F2A44]/60 backdrop-blur p-8">

              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">
                Características clave
              </h3>

              <ul className="space-y-4 text-sm text-[#C7CCD1]">
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
                  Sin posibilidad de edición o eliminación de registros
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0099CC]"></span>
                  Preparado para procesos de auditoría y verificación
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
