"use client";

import { BookOpen, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import {StatCard } from '../../admin/cards/StatCard'

export interface StatsUsuario {
  misBitacoras: number;
  bitacorasCompletadas: number;
  bitacorasPendientes: number;
  incidencias?: number;
}

interface Props {
  stats: StatsUsuario;
}

export const StatsGridUsuario: React.FC<Props> = ({ stats }) => {
  const statItems = [
    {
      title: "Mis Bitácoras",
      value: stats.misBitacoras,
      icon: <BookOpen size={28} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Completadas",
      value: stats.bitacorasCompletadas,
      icon: <CheckCircle size={28} />,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Pendientes",
      value: stats.bitacorasPendientes,
      icon: <Clock size={28} />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Incidencias",
      value: stats.incidencias || 0,
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