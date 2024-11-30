import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TechGuard - Smart Home Security',
  description: 'Innovazione e design all\'avanguardia per una casa più sicura e connessa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}