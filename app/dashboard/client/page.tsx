import { DashboardUsuario } from "@/app/ui/Dashboard/client";

export default async function UsuarioPage() {


  const stats = {
    misBitacoras: 12,
    bitacorasCompletadas: 8,
    bitacorasPendientes: 4,
    incidencias: 2,
  };

  return <DashboardUsuario stats={stats} />;
}