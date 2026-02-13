import Link from "next/link";

export type AccessCardProps = {
  titulo: string;
  descripcion: string;
  href: string;
  tipo: "empleado" | "cliente";
};

export const AccessCard = ({
  titulo,
  descripcion,
  href,
  tipo,
}: AccessCardProps) => {
  return (
    <div
      className="group rounded-2xl border border-gray-200 bg-white p-8
                 transition hover:border-[#0099CC]
                 hover:shadow-[0_10px_30px_-12px_rgba(0,153,204,0.35)]"
    >
      <div className="mb-6">
        <span
          className="inline-flex items-center gap-2 rounded-full
                     bg-[#0099CC]/10 px-4 py-1.5 text-xs font-semibold
                     text-[#0099CC] tracking-wide"
        >
          <span className="h-2 w-2 rounded-full bg-[#0099CC]" />
          {tipo === "empleado" ? "Acceso interno" : "Acceso externo"}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-[#1F2933] mb-4">
        {titulo}
      </h2>

      <p className="text-[#4B5563] mb-8">
        {descripcion}
      </p>

      <Link
        href={href}
        className="inline-flex w-full items-center justify-center
                   rounded-md bg-[#0099CC] px-4 py-3
                   text-sm font-semibold text-white
                   transition hover:bg-[#0077AA]"
      >
        Ingresar
      </Link>
    </div>
  );
};
