"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const linkClass = (active: boolean) =>
  `relative transition-colors font-medium
  ${
    active
      ? "text-[#0099CC]"
      : "text-[#6B7280] hover:text-[#0066A1]"
  }
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
  after:scale-x-0 after:bg-[#0099CC] after:transition-transform
  hover:after:scale-x-100
  ${active ? "after:scale-x-100" : ""}`

export const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Si luego quieres poner el logo como imagen aquí queda perfecto */}
            <span className="text-base font-semibold text-[#8A8D8C] tracking-wide">
              Bitácoras{" "}
              <span className="text-[#0099CC] font-bold">
                NOM-005
              </span>
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
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

            <li>
              <Link
                href="/personas-autorizadas"
                className={linkClass(
                  pathname.startsWith("/personas-autorizadas")
                )}
              >
                Personas autorizadas
              </Link>
            </li>

            <li>
              <Link
                href="/documentacion"
                className={linkClass(pathname.startsWith("/documentacion"))}
              >
                NOM-005
              </Link>
            </li>
          </ul>

          {/* User */}
          <div className="hidden md:block">
            <Link
              href="/perfil"
              className="text-sm text-[#6B7280] hover:text-[#0099CC] transition"
            >
              Mi cuenta
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#0066A1] text-2xl"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2 text-sm bg-white">
            {[
              { href: "/", label: "Inicio" },
              { href: "/estaciones", label: "Estaciones" },
              { href: "/bitacoras", label: "Bitácoras" },
              { href: "/personas-autorizadas", label: "Personas autorizadas" },
              { href: "/documentacion", label: "NOM-005" },
              { href: "/perfil", label: "Mi cuenta" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-[#6B7280] hover:text-[#0099CC] hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
