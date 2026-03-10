import { AccessCard } from "./accessCard";

export const AuthWelcomePage = () => {
  return (
    <section className="bg-white min-h-screen text-[#1F2933] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        {/* HEADER */}
        <header className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 mb-4 rounded-full
                       bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                       text-[#0099CC] tracking-wide"
          >
            <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
            Sistema de Gestión
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Bienvenido al sistema
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-[#4B5563]">
            Plataforma de administración y control conforme a la{" "}
            <span className="text-[#0099CC] font-medium">
              NOM-005-ASEA-2016
            </span>.
          </p>
        </header>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2">
          <AccessCard
            titulo="Portal para empleados"
            descripcion="Acceso administrativo para la gestión de estaciones,
            bitácoras operativas y control interno."
            href="/auth/loginUsuario"
            tipo="empleado"
          />

          <AccessCard
            titulo="Portal para clientes"
            descripcion="Consulta de información, seguimiento de registros
            y acceso a servicios disponibles."
            href="/auth/loginPersonal"
            tipo="cliente"
          />
        </div>

      </div>
    </section>
  );
}
