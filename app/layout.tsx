import '@/app/globals.css'
import React from 'react'
import { Navbar } from '@/app/ui/Home/Navbar'
import { Footer } from '@/app/ui/Home/Footer'

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
