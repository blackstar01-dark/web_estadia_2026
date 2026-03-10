"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-red-100 p-10 text-center space-y-6">
      
      <div className="flex justify-center">
        <div className="p-4 bg-red-100 rounded-2xl">
          <AlertTriangle size={28} className="text-red-600" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Ocurrió un error
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          No se pudieron cargar las bitácoras. Intenta nuevamente.
        </p>
      </div>

      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md transition"
      >
        Reintentar
      </button>
    </div>
  );
}