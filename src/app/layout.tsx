import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/theme-toggle"
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: "EmojiFinder - Find the perfect emoji",
  description: "Search for emojis or let us pick one for you",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          <ModeToggle />
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
