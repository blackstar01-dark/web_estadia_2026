"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const linkClass = (active: boolean) =>
  `relative transition-colors font-medium ${
    active ? "text-[#0099CC]" : "text-[#6B7280] hover:text-[#0066A1]"
  }`;

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });

        if (!res.ok) {
          setUserName(null);
          return;
        }

        const data = await res.json();
        setUserName(data.nombre);
      } catch {
        setUserName(null);
      }
    };

    fetchUser();
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setUserName(null);
    router.push("/auth/loginUsuario");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-[#0099CC]">
          Bitácoras NOM-005
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className={linkClass(pathname === "/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/estaciones"
              className={linkClass(pathname.startsWith("/estaciones"))}
            >
              Estaciones
            </Link>
          </li>
          <li>
            <Link
              href="/bitacoras"
              className={linkClass(pathname.startsWith("/bitacoras"))}
            >
              Bitácoras
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4 text-sm text-[#6B7280]">
          {userName ? (
            <>
              <span>Hola, {userName}</span>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 font-medium transition-colors"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link href="/auth">Mi cuenta</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
