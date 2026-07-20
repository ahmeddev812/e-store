"use client"

import { cn } from "@/lib/utils"

type Intensity = "subtle" | "medium" | "hero"

interface PremiumBackgroundProps {
  intensity?: Intensity
  className?: string
  fixed?: boolean
}

const intensityMap: Record<Intensity, string> = {
  subtle: "from-muted/20 via-transparent to-transparent",
  medium: "from-muted/30 via-muted/10 to-background",
  hero: "from-muted/40 via-background/80 to-background",
}

export function PremiumBackground({
  intensity = "medium",
  className,
  fixed = true,
}: PremiumBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none inset-0 -z-10 bg-gradient-to-br",
        intensityMap[intensity],
        fixed ? "fixed" : "absolute",
        className
      )}
    >
      <div className="absolute top-16 left-[8%] size-56 rounded-full bg-primary/10 blur-[100px] md:size-72 md:blur-[120px]" />
      <div className="absolute bottom-16 right-[8%] size-64 rounded-full bg-gold/8 blur-[110px] md:size-96 md:blur-[140px]" />
      {intensity !== "subtle" && (
        <div className="absolute top-1/2 left-1/2 size-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[100px]" />
      )}
    </div>
  )
}
