"use client"

import { BitacoraCard } from "../BitacoraCard"
import { FileText, Truck, Wrench } from "lucide-react"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-[#1F2933]">

      {/* Glow sutil superior */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,153,204,0.12),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Centro de{" "}
            <span className="text-[#0099CC]">Bitácoras</span>
          </h1>

          <p className="mt-4 text-[#4B5563] text-lg">
            Gestión y control de bitácoras conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>

          {/* Acciones */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/bitacoras/create"
              className="rounded-md bg-[#0099CC] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0077AA] transition shadow-sm"
            >
              + Nueva bitácora
            </Link>

            <Link
              href="/bitacoras/historial"
              className="rounded-md border border-[#0099CC] px-6 py-3 text-sm font-semibold text-[#0099CC] hover:bg-[#0099CC]/5 transition"
            >
              Ver historial
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BitacoraCard
            title="Actividades diarias"
            description="Registro diario de actividades operativas."
            href="/bitacoras/actividades-diarias"
            icon={<FileText className="h-6 w-6 text-[#0099CC]" />}
          />

          <BitacoraCard
            title="Descarga de pipas"
            description="Control de descargas y proveedores."
            href="/bitacoras/descarga-pipas"
            icon={<Truck className="h-6 w-6 text-[#0099CC]" />}
          />

          <BitacoraCard
            title="Operación y mantenimiento"
            description="Mantenimiento preventivo y correctivo."
            href="/bitacoras/operacion-mantenimiento"
            icon={<Wrench className="h-6 w-6 text-[#0099CC]" />}
          />
        </div>
      </div>
    </section>
  )
}
