import Link from "next/link";
import getBitacorasByTipo from "@/app/lib/bitacoras/getbyTipo";
import { Bitacora } from "@/app/lib/type/bitacora";

interface Props {
  tipo: string;
}

export const GetBitacorasTipo = async ({ tipo }: Props) => {
  const bitacoras: Bitacora[] = await getBitacorasByTipo(tipo);

  if (!bitacoras) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center text-red-500">
        Error al cargar las bitácoras.
      </div>
    );
  }

  const titulo = tipo
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <section className="bg-white min-h-screen text-[#1F2933]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 rounded-full
                         bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                         text-[#0099CC]"
            >
              <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
              Tipo de bitácora
            </span>

            <h1 className="text-3xl font-bold tracking-tight">
              Bitácoras - {titulo}
            </h1>

            <p className="mt-2 text-[#4B5563]">
              Total registradas:
              <span className="text-[#1F2933] font-medium ml-1">
                {bitacoras.length}
              </span>
            </p>
          </div>
        </header>

        {/* LISTA */}
        {bitacoras.length === 0 ? (
          <div
            className="rounded-xl border border-dashed border-gray-300
                       p-10 text-center text-gray-500"
          >
            No hay bitácoras registradas para este tipo.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {bitacoras.map((bitacora) => (
              <Link
                key={bitacora.id}
                href={`/bitacoras/${bitacora.id}`}
                className="group relative rounded-2xl border border-gray-200
                           bg-white p-6 transition
                           hover:border-[#0099CC]
                           hover:shadow-[0_10px_30px_-12px_rgba(0,153,204,0.35)]
                           hover:-translate-y-1"
              >
                {/* Estación */}
                <div
                  className="inline-flex items-center mb-4
                             rounded-full bg-[#0099CC]/10
                             px-3 py-1 text-xs font-semibold
                             text-[#0099CC]"
                >
                  {bitacora.estacion.nombre}
                </div>

                {/* Fundamento */}
                <p className="text-[#374151] text-sm leading-relaxed line-clamp-4">
                  {bitacora.fundamento}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {new Date(bitacora.createdAt).toLocaleDateString("es-MX")}
                  </span>

                  <span className="opacity-0 group-hover:opacity-100 transition text-[#0099CC] font-medium">
                    Ver detalles →
                  </span>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl
                                bg-gradient-to-br from-[#0099CC]/5 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition pointer-events-none" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
