"use client";

import { useRouter } from "next/navigation";

export const CreateProgramaButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard/admin/programas/create")}
      className="inline-flex items-center gap-2 
      bg-gradient-to-r from-blue-600 to-blue-500 
      hover:from-blue-700 hover:to-blue-600 
      text-white px-4 py-2 rounded-xl text-sm font-medium 
      shadow-md transition-all duration-200"
    >
      Crear Plantilla
    </button>
  );
};