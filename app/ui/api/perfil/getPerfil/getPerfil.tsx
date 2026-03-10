"use client";

import { useEffect, useState } from "react";
import { Usuario } from "@/app/lib/type/usuario";

export const Perfil = () => {
  const [user, setUser] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me", {
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("No autenticado");
        }

        const data: Usuario = await res.json();
        setUser(data);
      } catch (error) {
        throw error; 
      }
    };

    fetchUser();
  }, []);

  if (!user) return null; 

  const initial = user.nombre.charAt(0).toUpperCase();

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-[#0099CC] text-white flex items-center justify-center text-3xl font-bold">
            {initial}
          </div>

          <div>
            <h1 className="text-2xl font-bold">{user.nombre}</h1>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Rol</p>
            <p className="font-semibold capitalize">{user.rol}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500">ID</p>
            <p className="font-semibold">#{user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
