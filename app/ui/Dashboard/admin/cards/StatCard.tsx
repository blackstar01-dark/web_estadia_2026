"use client";

import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
}

export const StatCard = ({
  title,
  value,
  icon,
  color,
}: StatCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      
      {/* Fondo degradado suave */}
      <div
        className={`absolute inset-0 opacity-10 bg-gradient-to-br ${color}`}
      />

      <div className="relative p-6 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`p-4 rounded-xl text-white bg-gradient-to-br ${color} shadow-md`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
