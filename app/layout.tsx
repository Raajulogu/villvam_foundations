import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vilvam Foundation | Social Service in Tamil Nadu & Puducherry",
  description:
    "Community-driven social service organization serving Tamil Nadu and Puducherry. Food donation in Villianur, education support, medical help, and charitable activities in Pondicherry. 100% transparent local charity.",
  keywords: [
    "charity organization in Puducherry",
    "social service in Tamil Nadu",
    "food donation Villianur",
    "Pondicherry charity",
    "Vilvam Foundation",
    "Exnora International Villianur",
    "Tamil Nadu NGO",
    "local social service",
    "community support Puducherry",
    "help the poor Tamil Nadu",
  ],
  authors: [{ name: "Vilvam Foundation" }],
  openGraph: {
    title: "Vilvam Foundation | Social Service in Tamil Nadu & Puducherry",
    description:
      "Serving communities in Tamil Nadu and Puducherry through food distribution, education support, and local social service initiatives.",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
