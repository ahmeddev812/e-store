import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-lg border bg-muted/30 backdrop-blur-xl border-border px-3 py-2 text-sm text-foreground shadow-2xl transition-all outline-none placeholder:text-muted-foreground/70 focus-visible:border-[#F57224]/50 focus-visible:ring-3 focus-visible:ring-[#F57224]/20 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-transparent bg-transparent backdrop-blur-none shadow-none",
      },
      size: {
        default: "min-h-[80px] px-3 py-2 text-sm",
        sm: "min-h-[60px] px-2.5 py-1.5 text-xs",
        lg: "min-h-[120px] px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

function Textarea({
  className,
  variant = "default",
  size = "default",
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
