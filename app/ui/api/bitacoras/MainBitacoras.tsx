import getBitacoras from "@/app/lib/bitacoras/data";
import Link from "next/link";
import { Bitacora, TipoBitacora } from "@/app/lib/type/bitacora";

const tipoLabel: Record<TipoBitacora, string> = {
  ACTIVIDADES_DIARIAS: "Actividades diarias",
  DESCARGA_PIPAS: "Descarga de pipas",
  OPERACION_MANTENIMIENTO: "Operación y mantenimiento",
};

export const MainBitacoras = async () => {
  let bitacoras: Bitacora[] = [];

  try {
    bitacoras = await getBitacoras();
  } catch {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-red-600">
          Error al cargar las bitácoras. Intenta más tarde.
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
            Bitácoras registradas
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Control y seguimiento de bitácoras
          </h1>

          <p className="mt-4 max-w-2xl text-[#4B5563]">
            Administración conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* EMPTY */}
        {bitacoras.length === 0 ? (
          <div
            className="rounded-xl border border-dashed border-gray-300
                       p-10 text-center text-gray-500"
          >
            No existen bitácoras registradas.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bitacoras.map((bitacora) => (
              <article
                key={bitacora.id}
                className="rounded-2xl border border-gray-200
                           bg-white p-6 transition
                           hover:border-[#0099CC]
                           hover:shadow-[0_10px_30px_-12px_rgba(0,153,204,0.35)]"
              >
                {/* TIPO */}
                <span
                  className="inline-block mb-3 rounded-full
                             bg-[#0099CC]/10 px-3 py-1
                             text-xs font-semibold text-[#0099CC]"
                >
                  {tipoLabel[bitacora.tipo]}
                </span>

                {/* ESTACIÓN */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">
                    {bitacora.estacion.nombre}
                  </h2>
                  <p className="text-sm text-[#6B7280]">
                    Permiso CRE: {bitacora.estacion.permisoCRE}
                  </p>
                </div>

                {/* INFO */}
                <div className="space-y-2 text-sm text-[#4B5563]">
                  <p>
                    <span className="font-medium text-[#1F2933]">
                      Fecha:
                    </span>{" "}
                    {new Date(bitacora.createdAt).toLocaleDateString("es-MX")}
                  </p>

                  <p>
                    <span className="font-medium text-[#1F2933]">
                      Registros:
                    </span>{" "}
                    {bitacora.registros.length}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Bitácora #{bitacora.id}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      bitacora.activa
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {bitacora.activa ? "Activa" : "Cerrada"}
                  </span>
                </div>

                {/* ACTION */}
                <div className="mt-6">
                  <Link
                    href={`/bitacoras/${bitacora.id}`}
                    className="inline-flex w-full items-center justify-center
                               rounded-md bg-[#0099CC] px-4 py-2.5
                               text-sm font-semibold text-white
                               hover:bg-[#0077AA] transition"
                  >
                    Ver registros
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
