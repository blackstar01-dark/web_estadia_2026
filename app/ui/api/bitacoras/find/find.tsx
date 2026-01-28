import Link from "next/link";
import { Bitacora } from "@/app/lib/type/bitacora";
import { BitacoraRegistro } from "@/app/lib/type/registroBitacora";

interface Props {
  bitacora: Bitacora;
}

export const FindBitacora = ({ bitacora }: Props) => {
  const registros: BitacoraRegistro[] = bitacora.registros ?? [];

  return (
    <section className="bg-[#0B1C2D] min-h-screen text-white">
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
              Bitácora #{bitacora.id}
            </span>

            <h1 className="text-3xl font-bold tracking-tight">
              {bitacora.tipo}
            </h1>

            <p className="mt-2 text-[#C7CCD1]">
              Estación:{" "}
              <span className="text-white font-medium">
                {bitacora.estacion.nombre}
              </span>
            </p>
          </div>

          <Link
            href={`/bitacoras/${bitacora.id}/nuevo-registro`}
            className="inline-flex items-center justify-center
                       rounded-lg bg-[#0099CC] px-6 py-3
                       font-semibold text-white
                       hover:bg-[#0066A1] transition"
          >
            + Nuevo registro
          </Link>
        </header>

        {/* LISTA */}
        {registros.length === 0 ? (
          <div
            className="rounded-xl border border-dashed border-[#3A4A5A]
                       p-10 text-center text-[#7F8A96]"
          >
            No hay registros en esta bitácora.
          </div>
        ) : (
          <div className="space-y-6">
            {registros.map((registro) => (
              <article
                key={registro.id}
                className="rounded-2xl border border-[#1E3A52]
                           bg-[#0F2A44]/70 backdrop-blur
                           p-6 transition
                           hover:border-[#0099CC]/60"
              >
                {/* TOP */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#7F8A96]">
                    Folio #{registro.folio}
                  </span>

                  <span className="text-xs text-[#7F8A96]">
                    {new Date(registro.fechaHora).toLocaleString("es-MX")}
                  </span>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-[#E5E9EE] leading-relaxed mb-4">
                  {registro.descripcion}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#AEB6BE]">
                    Responsable:
                    <span className="text-white font-medium ml-1">
                      {registro.persona?.nombre ?? "No definido"}
                    </span>
                  </span>

                  {registro.persona?.cargo && (
                    <span
                      className="rounded-full bg-[#0099CC]/10
                                 px-3 py-1 text-xs
                                 text-[#0099CC]"
                    >
                      {registro.persona.cargo}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
