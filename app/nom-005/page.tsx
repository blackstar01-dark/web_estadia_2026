export default function Nom005Page() {
  return (
    <section className="bg-white min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* HEADER */}
        <header className="space-y-4">
          <span
            className="inline-flex items-center gap-2 rounded-full
                       bg-sky-100 px-4 py-1.5 text-xs font-semibold
                       text-sky-700"
          >
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            Cumplimiento normativo
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            NOM-005-ASEA-2016
          </h1>

          <p className="max-w-3xl text-slate-600">
            Este sistema digitaliza y administra las bitácoras operativas
            de estaciones de servicio, garantizando el cumplimiento
            de la{" "}
            <span className="font-medium text-sky-700">
              Norma Oficial Mexicana NOM-005-ASEA-2016
            </span>, emitida por la Agencia de Seguridad, Energía y Ambiente (ASEA).
          </p>
        </header>

        {/* OBJETIVO */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
          <h2 className="text-xl font-semibold">
            Objetivo de la norma
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Establecer los requisitos mínimos de seguridad operativa,
            mantenimiento, control y registro para las estaciones de servicio
            que expendan gasolina y diésel, con el fin de prevenir riesgos
            a las personas, al ambiente y a las instalaciones.
          </p>
        </section>

        {/* ALCANCE */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <h2 className="text-xl font-semibold">
            Alcance del sistema
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>Gestión de estaciones de servicio con identificación completa.</li>
            <li>Administración de personas autorizadas.</li>
            <li>Control de bitácoras operativas obligatorias.</li>
            <li>Registro de actividades con fecha y hora automáticas.</li>
            <li>Foliado consecutivo e inalterable.</li>
            <li>Firma digital del responsable.</li>
            <li>Historial y trazabilidad de la información.</li>
          </ul>
        </section>

        {/* BITÁCORAS */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <h2 className="text-xl font-semibold">
            Bitácoras contempladas
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Actividades diarias",
                desc:
                  "Registro cotidiano de la operación de la estación, turnos, incidencias y condiciones generales.",
              },
              {
                title: "Descarga de pipas",
                desc:
                  "Control de recepción de combustibles, verificación de condiciones y volúmenes recibidos.",
              },
              {
                title: "Operación y mantenimiento",
                desc:
                  "Seguimiento de inspecciones, mantenimientos preventivos y correctivos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CUMPLIMIENTO */}
        <section className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-emerald-700">
            Cumplimiento y validez
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>Los registros son generados con fecha y hora automáticas.</li>
            <li>La información no puede ser alterada tras el cierre de la bitácora.</li>
            <li>Cada registro cuenta con responsable identificado.</li>
            <li>El sistema conserva evidencia histórica para auditoría.</li>
          </ul>
        </section>

        {/* FOOTER LEGAL */}
        <footer className="pt-6 border-t border-slate-200
                           text-xs text-slate-500 leading-relaxed">
          Este sistema no sustituye las obligaciones legales del permisionario,
          sino que funge como una herramienta de apoyo para el cumplimiento
          de la NOM-005-ASEA-2016 y demás disposiciones aplicables emitidas por
          la Agencia de Seguridad, Energía y Ambiente (ASEA).
        </footer>

      </div>
    </section>
  );
}
