import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CourseGenX-AI',
  description: 'An AI Powered Course Generating platform that allows users to create courses that are customized by them and AI wil generate the course for them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        lexend.className,'antialiased min-h-screen pt-20'
      )}>{children}</body>
    </html>
  )
}
