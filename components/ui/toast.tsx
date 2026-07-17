"use client"

import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type ToasterProps = ComponentProps<typeof SonnerToaster>

function Toaster({
  className,
  ...props
}: ToasterProps) {
  return (
    <SonnerToaster
      className={cn("toaster group", className)}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group toast group-[.toaster]:flex group-[.toaster]:items-center group-[.toaster]:gap-2 group-[.toaster]:rounded-xl group-[.toaster]:border group-[.toaster]:border-white/20 group-[.toaster]:bg-white/10 group-[.toaster]:backdrop-blur-xl group-[.toaster]:px-4 group-[.toaster]:py-3 group-[.toaster]:text-sm group-[.toaster]:text-white group-[.toaster]:shadow-2xl",
          description: "group-[.toast]:text-white/70",
          actionButton:
            "group-[.toast]:rounded-lg group-[.toast]:bg-[#F57224] group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:rounded-lg group-[.toast]:border group-[.toast]:border-white/20 group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:text-white/70",
          error:
            "group-[.toaster]:border-red-500/30 group-[.toaster]:bg-red-500/10",
          success:
            "group-[.toaster]:border-emerald-500/30 group-[.toaster]:bg-emerald-500/10",
          warning:
            "group-[.toaster]:border-amber-500/30 group-[.toaster]:bg-amber-500/10",
          info:
            "group-[.toaster]:border-blue-500/30 group-[.toaster]:bg-blue-500/10",
        },
      }}
      {...props}
    />
  )
}

const toast = sonnerToast

export { Toaster, toast }
