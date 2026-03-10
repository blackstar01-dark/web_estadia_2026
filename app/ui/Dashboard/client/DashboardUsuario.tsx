"use client";

import { StatsGridUsuario, StatsUsuario } from "./cards/StatsGridUsuario";

interface Props {
  stats: StatsUsuario;
}

export const DashboardUsuario: React.FC<Props> = ({ stats }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Mi Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Resumen de tu actividad en el sistema
        </p>
      </div>

      {/* Stats */}
      <StatsGridUsuario stats={stats} />

      {/* Actividad reciente */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4">
          Mis últimas bitácoras
        </h2>

        {/* Aquí después puedes mapear tus bitácoras */}
        <p className="text-gray-400">
          Aquí aparecerán tus registros recientes.
        </p>
      </div>
    </div>
  );
};