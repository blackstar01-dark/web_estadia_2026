"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const CreatePersonalButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard/admin/usuarios/create")}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md transition-all"
    >
      <Plus size={18} />
      Nuevo Personal
    </button>
  );
};