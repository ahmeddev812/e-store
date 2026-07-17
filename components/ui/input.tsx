import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"
import React, { forwardRef } from "react"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-white/10 backdrop-blur-xl border-white/20 text-white shadow-2xl transition-all outline-none placeholder:text-white/40 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-[#F57224]/50 focus-visible:ring-3 focus-visible:ring-[#F57224]/20 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-transparent bg-transparent backdrop-blur-none shadow-none",
        glass: "bg-white/5 backdrop-blur-md border-white/10",
        premium: "bg-gradient-to-br from-white/10 to-white/5 border-[#F57224]/30 focus-visible:border-[#F57224] focus-visible:shadow-glow",
        error: "border-red-500/50 focus-visible:border-red-500 focus-visible:ring-red-500/20",
        success: "border-emerald-500/50 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20",
      },
      size: {
        default: "h-9 px-3 py-1 text-sm",
        sm: "h-8 px-2.5 py-1 text-xs",
        lg: "h-10 px-4 py-2 text-base",
        xl: "h-12 px-5 py-3 text-lg",
      },
      rounded: {
        default: "rounded-lg",
        sm: "rounded-md",
        lg: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      fullWidth: true,
    },
  }
)

type InputProps = Omit<InputPrimitive.Props, "size"> & VariantProps<typeof inputVariants> & {
  error?: string
  success?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default",
    rounded = "default",
    fullWidth = true,
    error,
    success,
    icon,
    iconPosition = "left",
    disabled,
    ...props 
  }, ref) => {
    // Determine variant based on error/success states
    let computedVariant = variant
    if (error) computedVariant = "error"
    else if (success) computedVariant = "success"
    
    return (
      <div className={cn("relative", fullWidth && "w-full")}>
        {icon && iconPosition === "left" && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {icon}
          </div>
        )}
        <InputPrimitive
          data-slot="input"
          ref={ref}
          disabled={disabled}
          className={cn(
            inputVariants({ variant: computedVariant, size, rounded, fullWidth }),
            icon && iconPosition === "left" && "pl-10",
            icon && iconPosition === "right" && "pr-10",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
        {icon && iconPosition === "right" && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {icon}
          </div>
        )}
        {error && (
          <p className="mt-1 text-xs text-red-400 animate-fade-in">{error}</p>
        )}
        {success && !error && (
          <p className="mt-1 text-xs text-emerald-400 animate-fade-in">Valid input</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

// Premium Password Input Component
interface PasswordInputProps extends InputProps {
  showPasswordToggle?: boolean
}

function PasswordInput({ showPasswordToggle = true, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Input
      type={showPassword ? "text" : "password"}
      {...props}
      icon={
        showPasswordToggle ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-white/50 hover:text-white transition-colors"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        ) : undefined
      }
      iconPosition="right"
    />
  )
}

// Premium Search Input Component
interface SearchInputProps extends InputProps {
  onSearch?: (value: string) => void
  debounceDelay?: number
}

function SearchInput({ onSearch, debounceDelay = 300, ...props }: SearchInputProps) {
  const [value, setValue] = React.useState(props.value || "")
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onSearch && value !== props.value) {
        onSearch(value as string)
      }
    }, debounceDelay)
    
    return () => clearTimeout(timer)
  }, [value, onSearch, debounceDelay])
  
  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      icon={<SearchIcon className="size-4 text-white/40" />}
      iconPosition="left"
    />
  )
}

// Helper icon component
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export { Input, PasswordInput, SearchInput, inputVariants }