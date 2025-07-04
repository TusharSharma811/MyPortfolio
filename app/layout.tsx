import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Engineer",
  description:
    "Computer Science student and Full Stack Engineer specializing in React, Next.js, Node.js, and distributed systems.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
    <html lang="en" className="dark">
      
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
