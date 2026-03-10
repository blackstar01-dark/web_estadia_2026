"use client";

import { StatsGrid, Stats } from "./cards/StatsGrid";


interface Props {
  stats: Stats;
}

export const DashboardAdmin: React.FC<Props> = ({ stats }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Administrador
        </h1>
        <p className="text-gray-500 mt-1">
          Resumen general del sistema de bitácoras
        </p>
      </div>

      {/* Stats cards */}
      <StatsGrid stats={stats} />

      {/* Sección futura */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4">Actividad reciente</h2>
      </div>
    </div>
  );
};
