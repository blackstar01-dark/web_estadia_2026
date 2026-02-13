import getEstaciones from "@/app/lib/estaciones/data";
import Link from "next/link";
import { Estacion } from "@/app/lib/type/estacion";

export const MainEstaciones = async () => {
  let estaciones: Estacion[] = [];

  try {
    estaciones = await getEstaciones();
  } catch {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-red-600">
          Error al cargar las estaciones. Intenta más tarde.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen text-[#1F2933]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="mb-12">
          <span
            className="inline-flex items-center gap-2 mb-4 rounded-full
                       bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                       text-[#0099CC] tracking-wide"
          >
            <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
            Estaciones registradas
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Gestión de estaciones de servicio
          </h1>

          <p className="mt-4 max-w-2xl text-[#4B5563]">
            Administración conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* EMPTY */}
        {estaciones.length === 0 ? (
          <div
            className="rounded-xl border border-dashed border-gray-300
                       p-10 text-center text-gray-500"
          >
            No existen estaciones registradas.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {estaciones.map((estacion) => (
              <article
                key={estacion.id}
                className="rounded-2xl border border-gray-200
                           bg-white p-6 transition
                           hover:border-[#0099CC]
                           hover:shadow-[0_10px_30px_-12px_rgba(0,153,204,0.35)]"
              >
                {/* TITULO */}
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">
                    {estacion.nombre}
                  </h2>
                  <p className="text-sm text-[#6B7280]">
                    {estacion.razonSocial}
                  </p>
                </div>

                {/* DATOS LEGALES */}
                <div className="space-y-2 text-sm text-[#4B5563]">
                  <p>
                    <span className="font-medium text-[#1F2933]">
                      Permiso CRE:
                    </span>{" "}
                    {estacion.permisoCRE}
                  </p>

                  <p>
                    <span className="font-medium text-[#1F2933]">
                      Dirección:
                    </span>{" "}
                    {estacion.direccion}
                  </p>
                </div>

                {/* BITÁCORAS */}
                <div
                  className="mt-5 rounded-xl bg-[#F9FAFB]
                             border border-gray-200 p-4"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Bitácoras operativas
                  </p>

                  <ul className="space-y-1 text-sm text-[#4B5563]">
                    <li>• Actividades diarias</li>
                    <li>• Descarga de pipas</li>
                    <li>• Operación y mantenimiento</li>
                  </ul>
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Alta:{" "}
                    {new Date(estacion.createdAt).toLocaleDateString("es-MX")}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      estacion.activa
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {estacion.activa ? "Activa" : "Inactiva"}
                  </span>
                </div>

                {/* ACTION */}
                <div className="mt-6">
                  <Link
                    href={`/estaciones/${estacion.id}/bitacoras`}
                    className="inline-flex w-full items-center justify-center
                               rounded-md bg-[#0099CC] px-4 py-2.5
                               text-sm font-semibold text-white
                               hover:bg-[#0077AA] transition"
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
  );
};
