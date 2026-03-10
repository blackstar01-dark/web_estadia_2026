import Link from "next/link";
import { LayoutDashboard, BookOpen, Users } from "lucide-react";

export default function UsuarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl flex flex-col">
        
        {/* Logo / Header */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold tracking-wide">
            Mi Panel
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Panel de usuario
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          <NavItem
            href="/dashboard/usuario"
            icon={<LayoutDashboard size={18} />}
            label="Inicio"
          />
          <NavItem
            href="/dashboard/usuario/mis-bitacoras"
            icon={<BookOpen size={18} />}
            label="Mis Bitácoras"
          />
          <NavItem
            href="/dashboard/usuario/nueva"
            icon={<Users size={18} />}
            label="Nueva Bitácora"
          />
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 text-sm text-gray-400">
          Sistema de Bitácoras © 2026
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="bg-white rounded-2xl shadow-md p-8 min-h-[80vh]">
          {children}
        </div>
      </main>
    </div>
  );
}

// NavItem igual que Admin
function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200 group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}