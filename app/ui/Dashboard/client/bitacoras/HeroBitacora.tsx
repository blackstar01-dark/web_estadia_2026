"use client";

import { BitacoraTableDynamic } from "./BitacoraTable";

export const HeroBitacora = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Bitácoras Disponibles
      </h1>

      <BitacoraTableDynamic />
    </div>
  );
};