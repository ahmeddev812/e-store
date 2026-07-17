"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, rgba(15,15,25,0.95), rgba(10,10,20,0.95))',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            color: '#fff',
          },
        }}
      />
    </ThemeProvider>
  )
}
