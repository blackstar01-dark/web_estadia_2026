"use client"

import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-[#0B1C2D] text-[#AEB6BE] border-t border-[#1E3A52]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Sistema */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-base mb-3">
              Sistema Digital de Bitácoras
            </h3>
            <p className="text-sm leading-relaxed max-w-md">
              Plataforma para la digitalización y resguardo de bitácoras
              obligatorias de estaciones de servicio, diseñada para garantizar
              el cumplimiento íntegro de la{" "}
              <span className="text-[#0099CC] font-medium">
                NOM-005-ASEA-2016
              </span>.
            </p>

            <p className="text-xs mt-4 text-[#7F8A96]">
              Registro inalterable · Trazabilidad · Integridad de la información
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[#0099CC] transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/estaciones"
                  className="hover:text-[#0099CC] transition"
                >
                  Estaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/bitacoras"
                  className="hover:text-[#0099CC] transition"
                >
                  Bitácoras
                </Link>
              </li>
              <li>
                <Link
                  href="/documentacion"
                  className="hover:text-[#0099CC] transition"
                >
                  Documentación NOM
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Empresa
            </h4>
            <p className="text-sm text-[#D1D6DB]">
              Figueroa González y Asociados, S. C.
            </p>
            <p className="text-xs mt-2 leading-relaxed text-[#AEB6BE]">
              Soluciones tecnológicas especializadas en cumplimiento normativo,
              seguridad operativa y transformación digital.
            </p>
          </div>

        </div>

        {/* Línea */}
        <div className="border-t border-[#1E3A52] my-8"></div>

        {/* Pie inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7F8A96]">
          <span>
            © {new Date().getFullYear()} Figueroa González y Asociados, S. C.
            Todos los derechos reservados.
          </span>

          <span>
            Versión del sistema:{" "}
            <span className="text-[#D1D6DB]">v1.0.0</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
