"use client";

import { useRouter } from "next/navigation";

export const CreateEstacionButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard/admin/estaciones/create")}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-all duration-200"
    >
      Crear Estación
    </button>
  );
};