"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string
  onChange?: (value: string) => void
  onClear?: () => void
  glass?: boolean
}

function SearchInput({
  className,
  value,
  onChange,
  onClear,
  glass = true,
  placeholder = "Search...",
  ...props
}: SearchInputProps) {
  const [focused, setFocused] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClear = () => {
    onChange?.("")
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div
      data-slot="search-input"
      className={cn(
        "group relative flex items-center rounded-lg transition-all",
        glass
          ? "border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl has-data-[focused=true]:border-[#F57224]/50 has-data-[focused=true]:ring-3 has-data-[focused=true]:ring-[#F57224]/20"
          : "border border-white/20 bg-white/5",
        className
      )}
      data-focused={focused || undefined}
    >
      <Search className="pointer-events-none absolute left-3 size-4 text-white/40" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent py-2 pr-10 pl-9 text-sm text-white outline-none placeholder:text-white/40"
        )}
        {...props}
      />
      <AnimatePresence>
        {value && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={handleClear}
            className="absolute right-3 flex items-center justify-center rounded-full p-0.5 text-white/40 transition-colors hover:text-white"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export { SearchInput }
