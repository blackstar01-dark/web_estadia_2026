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
      <section className="bg-[#0B1C2D] min-h-screen text-white flex items-center justify-center">
        <p className="text-red-400">
          Error al cargar las bitácoras. Intenta más tarde.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#0B1C2D] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-2 mb-4 rounded-full
                           bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                           text-[#0099CC] tracking-wide">
            <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
            Bitácoras registradas
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Control y seguimiento de bitácoras
          </h1>

          <p className="mt-4 max-w-2xl text-[#C7CCD1]">
            Administración conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* EMPTY */}
        {bitacoras.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#3A4A5A]
                          p-10 text-center text-[#7F8A96]">
            No existen bitácoras registradas.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bitacoras.map((bitacora) => (
              <article
                key={bitacora.id}
                className="rounded-2xl border border-[#1E3A52]
                           bg-[#0F2A44]/70 backdrop-blur p-6 transition
                           hover:border-[#0099CC]/70"
              >

                {/* TIPO */}
                <span className="inline-block mb-3 rounded-full
                                 bg-[#0099CC]/10 px-3 py-1
                                 text-xs font-semibold text-[#0099CC]">
                  {tipoLabel[bitacora.tipo]}
                </span>

                {/* ESTACIÓN */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">
                    {bitacora.estacion.nombre}
                  </h2>
                  <p className="text-sm text-[#AEB6BE]">
                    Permiso CRE: {bitacora.estacion.permisoCRE}
                  </p>
                </div>

                {/* INFO */}
                <div className="space-y-2 text-sm text-[#C7CCD1]">
                  <p>
                    <span className="font-medium text-white">
                      Fecha:
                    </span>{" "}
                    {new Date(bitacora.createdAt).toLocaleDateString("es-MX")}
                  </p>

                  <p>
                    <span className="font-medium text-white">
                      Registros:
                    </span>{" "}
                    {bitacora.registros.length}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#7F8A96]">
                    Bitácora #{bitacora.id}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      bitacora.activa
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-slate-500/10 text-slate-400"
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
                               hover:bg-[#0066A1] transition"
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
