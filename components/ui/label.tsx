import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "inline-block font-medium leading-none transition-all duration-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-foreground/80",
        muted: "text-muted-foreground",
        primary: "text-[#F57224]",
        success: "text-emerald-400",
        error: "text-red-400",
        warning: "text-yellow-400",
        gradient: "bg-gradient-to-r from-[#F57224] to-orange-400 bg-clip-text text-transparent",
      },
      size: {
        default: "text-sm",
        xs: "text-xs",
        sm: "text-[11px]",
        lg: "text-base",
        xl: "text-lg font-semibold",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      uppercase: {
        true: "uppercase tracking-wider",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      weight: "medium",
      uppercase: false,
    },
  }
)

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean
  optional?: boolean
  tooltip?: string
  icon?: React.ReactNode
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default",
    weight = "medium",
    uppercase = false,
    required,
    optional,
    tooltip,
    icon,
    children,
    ...props 
  }, ref) => {
    return (
      <div className="flex items-center gap-2">
        {icon && (
          <span className="flex-shrink-0 text-[#F57224]">
            {icon}
          </span>
        )}
        <label
          ref={ref}
          data-slot="label"
          className={cn(
            labelVariants({ variant, size, weight, uppercase }),
            className
          )}
          {...props}
        >
          {children}
          {required && (
            <span className="ml-1 text-destructive" aria-hidden="true">
              *
            </span>
          )}
          {optional && !required && (
            <span className="ml-1 text-foreground/30 text-[10px] font-normal" aria-hidden="true">
              (optional)
            </span>
          )}
        </label>
        {tooltip && (
          <div className="group relative inline-flex">
            <button
              type="button"
              className="text-muted-foreground/70 hover:text-foreground/70 transition-colors"
              aria-label="More information"
            >
              <HelpIcon className="size-3.5" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 z-10">
              <div className="whitespace-nowrap rounded-lg bg-background/90 px-2 py-1 text-xs text-foreground backdrop-blur-sm">
                {tooltip}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

Label.displayName = "Label"

// Helper icon component
function HelpIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

// Premium Form Field Component (Label + Input combination)
interface FormFieldProps extends LabelProps {
  input: React.ReactNode
  error?: string
  hint?: string
}

function FormField({
  input,
  error,
  hint,
  children,
  ...labelProps
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      {children && (
        <Label {...labelProps}>
          {children}
        </Label>
      )}
      {input}
      {error && (
        <p className="text-xs text-red-400 animate-fade-in flex items-center gap-1">
          <ErrorIcon className="size-3" />
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
          <InfoIcon className="size-3" />
          {hint}
        </p>
      )}
    </div>
  )
}

function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}

export { Label, FormField, labelVariants }