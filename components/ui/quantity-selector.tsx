"use client"

import * as React from "react"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface QuantitySelectorProps {
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
  size?: "xs" | "sm" | "default" | "lg" | "xl"
  variant?: "default" | "glass" | "premium" | "bordered"
  className?: string
  disabled?: boolean
  showStock?: boolean
  stock?: number
  onDelete?: () => void
  label?: string
}

const sizeMap = {
  xs: { button: "size-6", input: "h-6 w-8 text-xs", icon: "size-2.5", gap: "gap-0" },
  sm: { button: "size-7", input: "h-7 w-10 text-xs", icon: "size-3", gap: "gap-0" },
  default: { button: "size-9", input: "h-9 w-12 text-sm", icon: "size-4", gap: "gap-0" },
  lg: { button: "size-10", input: "h-10 w-14 text-base", icon: "size-4", gap: "gap-0.5" },
  xl: { button: "size-12", input: "h-12 w-16 text-lg", icon: "size-5", gap: "gap-1" },
}

const variantClasses = {
  default: "border-border bg-muted/50 backdrop-blur-xl",
  glass: "glass-premium border-border",
  premium: "bg-gradient-to-r from-[#F57224]/10 to-[#F57224]/5 border-[#F57224]/30 shadow-glow",
  bordered: "border-2 border-[#F57224]/20 bg-transparent",
}

function QuantitySelector({
  value,
  min = 1,
  max = 99,
  onChange,
  size = "default",
  variant = "default",
  className,
  disabled = false,
  showStock = false,
  stock,
  onDelete,
  label,
}: QuantitySelectorProps) {
  const s = sizeMap[size]
  const currentStock = stock !== undefined ? stock : max
  
  const handleDecrease = () => {
    if (!disabled && value > min) {
      onChange(Math.max(min, value - 1))
    }
  }

  const handleIncrease = () => {
    if (!disabled && value < currentStock) {
      onChange(Math.min(currentStock, value + 1))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    if (!isNaN(newValue) && newValue >= min && newValue <= currentStock) {
      onChange(newValue)
    }
  }

  const getStockStatus = () => {
    if (currentStock <= 0) return { text: "Out of stock", color: "text-red-400" }
    if (currentStock <= 10) return { text: `Only ${currentStock} left`, color: "text-yellow-400" }
    if (currentStock <= 20) return { text: `Hurry! ${currentStock} left`, color: "text-orange-400" }
    return { text: `${currentStock} in stock`, color: "text-emerald-400" }
  }

  const stockStatus = getStockStatus()

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-foreground/70">
          {label}
        </label>
      )}
      
      <div className="flex items-center gap-3">
        <div
          data-slot="quantity-selector"
          className={cn(
            "inline-flex items-center rounded-lg border transition-all duration-200",
            variantClasses[variant],
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          <button
            type="button"
            disabled={disabled || value <= min || currentStock <= 0}
            onClick={handleDecrease}
            className={cn(
              "flex items-center justify-center rounded-l-lg text-foreground/70 transition-all duration-200 hover:text-foreground hover:bg-muted/30",
              "disabled:pointer-events-none disabled:opacity-30",
              s.button
            )}
            aria-label="Decrease quantity"
          >
            <Minus className={s.icon} />
          </button>
          
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleInputChange}
            readOnly={disabled}
            aria-label="Quantity"
            className={cn(
              "border-x border-border bg-transparent text-center font-medium text-foreground outline-none transition-all",
              "focus:bg-muted/50",
              s.input,
              disabled && "cursor-not-allowed"
            )}
          />
          
          <button
            type="button"
            disabled={disabled || value >= currentStock || currentStock <= 0}
            onClick={handleIncrease}
            className={cn(
              "flex items-center justify-center rounded-r-lg text-foreground/70 transition-all duration-200 hover:text-foreground hover:bg-muted/30",
              "disabled:pointer-events-none disabled:opacity-30",
              s.button
            )}
            aria-label="Increase quantity"
          >
            <Plus className={s.icon} />
          </button>
        </div>

        {onDelete && (
          <button
            onClick={onDelete}
            disabled={disabled}
            className={cn(
              "rounded-lg p-2 text-muted-foreground/70 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400",
              s.button,
              disabled && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Remove item"
          >
            <Trash2 className={s.icon} />
          </button>
        )}
      </div>

      {showStock && (
        <div className="flex items-center gap-2">
          <div className={cn(
            "text-xs transition-colors",
            stockStatus.color
          )}>
            {currentStock <= 0 ? (
              <span className="flex items-center gap-1">
                <ShoppingBag className="size-3" />
                {stockStatus.text}
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <span className={`inline-block size-1.5 rounded-full ${currentStock <= 10 ? "bg-yellow-400 animate-pulse" : "bg-emerald-400"}`} />
                {stockStatus.text}
              </span>
            )}
          </div>
          {currentStock <= 10 && currentStock > 0 && (
            <div className="flex-1 h-1 rounded-full bg-muted/30 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
                style={{ width: `${(value / currentStock) * 100}%` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Quick Quantity Presets Component
interface QuantityPresetsProps {
  onChange: (value: number) => void
  presets?: number[]
  currentValue?: number
}

function QuantityPresets({ onChange, presets = [1, 2, 3, 5, 10], currentValue }: QuantityPresetsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {presets.map((preset) => (
        <button
          key={preset}
          onClick={() => onChange(preset)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200",
            currentValue === preset
              ? "bg-gradient-to-r from-[#F57224] to-orange-500 text-white shadow-glow"
              : "bg-muted/50 text-muted-foreground hover:bg-muted/30 hover:text-foreground border border-border"
          )}
        >
          {preset}
        </button>
      ))}
    </div>
  )
}

export { QuantitySelector, QuantityPresets }