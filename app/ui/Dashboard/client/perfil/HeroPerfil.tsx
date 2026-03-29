"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMyProfile } from "@/app/lib/personal/mi-perfil";
import type { PersonalAutorizado } from "@/app/lib/type/personalautorizado";

export const HeroPerfil = () => {
  const [perfil, setPerfil] = useState<PersonalAutorizado | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPerfil = async () => {
      const user = await getMyProfile();

      if (user.error || !user.data) {
        router.push("/login");
        return;
      }

      setPerfil(user.data);
      setLoading(false);
    };

    fetchPerfil();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-pulse text-gray-400">
          Cargando perfil...
        </div>
      </div>
    );
  }

  if (!perfil) return null;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Mi Perfil
        </h1>

        <button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 rounded-xl text-sm shadow hover:scale-105 transition">
          Editar perfil
        </button>
      </div>

      {/* CARD PRINCIPAL */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* HEADER CARD */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-500 p-6 text-white">
          <div className="flex items-center gap-4">
            
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
              {perfil.nombre.charAt(0)}
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                {perfil.nombre}
              </h2>
              <p className="text-sm text-blue-100">
                {perfil.cargo}
              </p>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          
          {/* Estación */}
          <div className="bg-gray-50 rounded-2xl p-5 border hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-1">Estación</p>
            <p className="text-sm font-semibold text-gray-800">
              {perfil.estacion?.nombre}
            </p>
          </div>

          {/* ID */}
          <div className="bg-gray-50 rounded-2xl p-5 border hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-1">ID Usuario</p>
            <p className="text-sm font-semibold text-gray-800">
              #{perfil.id}
            </p>
          </div>

          {/* Cargo (badge style) */}
          <div className="bg-gray-50 rounded-2xl p-5 border hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-2">Cargo</p>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              {perfil.cargo}
            </span>
          </div>

          {/* Nombre */}
          <div className="bg-gray-50 rounded-2xl p-5 border hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-1">Nombre completo</p>
            <p className="text-sm font-semibold text-gray-800">
              {perfil.nombre}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};