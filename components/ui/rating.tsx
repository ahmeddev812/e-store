"use client"

import * as React from "react"
import { Star, StarHalf } from "lucide-react"

import { cn } from "@/lib/utils"

interface RatingProps {
  value: number
  max?: number
  size?: "sm" | "default" | "lg"
  readonly?: boolean
  onChange?: (value: number) => void
  showValue?: boolean
  className?: string
}

const sizeMap = {
  sm: "size-3",
  default: "size-4",
  lg: "size-5",
}

function Rating({
  value,
  max = 5,
  size = "default",
  readonly = false,
  onChange,
  showValue = false,
  className,
}: RatingProps) {
  const [hovered, setHovered] = React.useState<number | null>(null)
  const displayValue = hovered ?? value

  return (
    <div
      data-slot="rating"
      className={cn(
        "inline-flex items-center gap-0.5",
        readonly ? "" : "cursor-pointer",
        className
      )}
      role={readonly ? "img" : "radiogroup"}
      aria-label={`Rating: ${value} out of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1
        const filled = displayValue >= starValue
        const halfFilled = !filled && displayValue >= starValue - 0.5

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            tabIndex={readonly ? -1 : 0}
            aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
            className={cn(
              "transition-all",
              readonly
                ? "text-amber-400"
                : "text-amber-400 hover:scale-110 active:scale-95",
              !readonly && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57224]/50 focus-visible:rounded-sm"
            )}
            onMouseEnter={() => !readonly && setHovered(starValue)}
            onMouseLeave={() => !readonly && setHovered(null)}
            onClick={() => !readonly && onChange?.(starValue)}
          >
            {halfFilled ? (
              <StarHalf className={cn("fill-current", sizeMap[size])} />
            ) : (
              <Star
                className={cn(
                  sizeMap[size],
                  filled ? "fill-current" : "fill-none opacity-30"
                )}
              />
            )}
          </button>
        )
      })}
      {showValue && (
        <span className="ml-1 text-sm text-muted-foreground">{value.toFixed(1)}</span>
      )}
    </div>
  )
}

export { Rating }
