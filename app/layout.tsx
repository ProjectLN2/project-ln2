import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project LN2 — Performance Unlocked',
  description: 'A gaming-focused custom Windows OS built for performance, responsiveness and compatibility.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
