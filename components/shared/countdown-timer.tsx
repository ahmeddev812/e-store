"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CountdownTimerProps {
  target: Date
  className?: string
}

export function CountdownTimer({ target, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [target])

  const units = [
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ]

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      role="timer"
      aria-live="polite"
      aria-label="Sale countdown"
    >
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative min-w-[3.25rem] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 px-2.5 py-2 backdrop-blur-sm">
            <span className="text-xl font-bold tabular-nums text-primary md:text-2xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <span className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
