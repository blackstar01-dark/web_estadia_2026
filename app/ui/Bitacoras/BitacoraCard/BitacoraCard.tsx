"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

interface BitacoraCardProps {
  title: string
  description: string
  href: string
  icon: ReactNode
}

export const BitacoraCard = ({
  title,
  description,
  href,
  icon,
}: BitacoraCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col rounded-2xl
                   border border-[#1E3A52]
                   bg-[#0F2A44]/70 p-6 backdrop-blur-xl transition
                   hover:border-[#0099CC]
                   hover:shadow-[0_0_0_1px_rgba(0,153,204,0.45),0_20px_40px_-20px_rgba(0,153,204,0.35)]"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0099CC]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* Icon */}
        <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                        bg-[#0099CC]/10 text-[#0099CC]
                        group-hover:bg-[#0099CC]/20 transition">
          {icon}
        </div>

        {/* Content */}
        <h3 className="relative text-lg font-semibold text-white group-hover:text-[#0099CC] transition">
          {title}
        </h3>

        <p className="relative mt-2 text-sm text-[#AEB6BE] leading-relaxed">
          {description}
        </p>

        {/* Action */}
        <div className="relative mt-auto pt-6 flex items-center gap-2
                        text-sm font-medium text-[#0099CC]
                        opacity-0 group-hover:opacity-100 transition">
          Entrar
          <ArrowRight className="h-4 w-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}
