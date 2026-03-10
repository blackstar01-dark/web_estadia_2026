"use client";

import { BookOpen, Users, MapPin, AlertTriangle } from "lucide-react";
import { StatCard } from "./StatCard";

export interface Stats {
  totalBitacoras: number;
  totalEstacion: number;
  totalPersonal: number;
  totalIncidencias?: number; // opcional si tienes endpoint
}

interface Props {
  stats: Stats;
}

export const StatsGrid: React.FC<Props> = ({ stats }) => {
  const statItems = [
    {
      title: "Total Bitácoras",
      value: stats.totalBitacoras,
      icon: <BookOpen size={28} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Estaciones",
      value: stats.totalEstacion,
      icon: <MapPin size={28} />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Personal",
      value: stats.totalPersonal,
      icon: <Users size={28} />,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Incidencias",
      value: stats.totalIncidencias || 5,
      icon: <AlertTriangle size={28} />,
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};
