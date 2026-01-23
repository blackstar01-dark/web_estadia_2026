import { getEstaciones } from '@/app/service/estaciones'
import Link from 'next/link'

export const MainEstaciones = async () => {
  const estaciones = await getEstaciones()

  return (
    <section className="bg-[#0B1C2D] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-2 mb-4 rounded-full
                           bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                           text-[#0099CC] tracking-wide">
            <span className="h-2 w-2 rounded-full bg-[#0099CC]"></span>
            Estaciones registradas
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Gestión de estaciones de servicio
          </h1>

          <p className="mt-4 max-w-2xl text-[#C7CCD1]">
            Consulta y administración de estaciones dadas de alta en el sistema,
            conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* EMPTY */}
        {estaciones.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#3A4A5A]
                          p-10 text-center text-[#7F8A96]">
            No existen estaciones registradas actualmente.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {estaciones.map((estacion: any) => (
              <article
                key={estacion.id}
                className="rounded-2xl border border-[#1E3A52]
                           bg-[#0F2A44]/70 backdrop-blur p-6 transition
                           hover:border-[#0099CC]/70
                           hover:shadow-[0_20px_40px_-20px_rgba(0,153,204,0.35)]"
              >
                {/* TITULO */}
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white">
                    {estacion.nombre}
                  </h2>
                  <p className="text-sm text-[#AEB6BE]">
                    {estacion.razonSocial}
                  </p>
                </div>

                {/* DATOS LEGALES */}
                <div className="space-y-2 text-sm text-[#C7CCD1]">
                  <p>
                    <span className="font-medium text-white">
                      Permiso CRE:
                    </span>{' '}
                    {estacion.permisoCRE}
                  </p>

                  <p>
                    <span className="font-medium text-white">
                      Dirección:
                    </span>{' '}
                    {estacion.direccion}
                  </p>
                </div>

                {/* BITÁCORAS */}
                <div className="mt-5 rounded-xl bg-[#0B1C2D]/70
                                border border-[#1E3A52] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#7F8A96]">
                    Bitácoras operativas
                  </p>

                  <ul className="space-y-1 text-sm text-[#C7CCD1]">
                    <li>• Actividades diarias</li>
                    <li>• Descarga de pipas</li>
                    <li>• Operación y mantenimiento</li>
                  </ul>
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#7F8A96]">
                    Alta:{' '}
                    {new Date(estacion.createdAt).toLocaleDateString()}
                  </span>

                  <span className="rounded-full bg-[#0099CC]/10
                                   px-3 py-1 text-xs font-medium
                                   text-[#0099CC]">
                    Activa
                  </span>
                </div>

                {/* ACCIÓN */}
                <div className="mt-6">
                  <Link
                    href={`/estaciones/${estacion.id}/bitacoras`}
                    className="inline-flex w-full items-center justify-center
                               rounded-md bg-[#0099CC] px-4 py-2.5
                               text-sm font-semibold text-white
                               hover:bg-[#0066A1] transition"
                  >
                    Acceder a bitácoras
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
