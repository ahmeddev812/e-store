"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden transition-all duration-300",
  {
    variants: {
      size: {
        xs: "size-6 rounded-md",
        sm: "size-8 rounded-lg",
        default: "size-10 rounded-full",
        md: "size-12 rounded-full",
        lg: "size-16 rounded-2xl",
        xl: "size-20 rounded-2xl",
        "2xl": "size-24 rounded-3xl",
      },
      variant: {
        default: "",
        glass: "ring-2 ring-white/20 ring-offset-2 ring-offset-black/20 backdrop-blur-sm",
        premium: "ring-2 ring-[#F57224]/50 ring-offset-2 ring-offset-black/30 shadow-glow",
        bordered: "border-2 border-[#F57224]/30",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

interface AvatarRootProps extends AvatarPrimitive.Root.Props, VariantProps<typeof avatarVariants> {
  className?: string
}

function Avatar({
  className,
  size,
  variant,
  ...props
}: AvatarRootProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        avatarVariants({ size, variant }),
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0f172a] font-medium text-white/80 transition-all duration-300 group-hover:from-[#F57224]/20 group-hover:to-[#F57224]/10 group-hover:text-[#F57224]",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}

// Premium Avatar Group Component
interface AvatarGroupProps {
  children: React.ReactNode
  max?: number
  size?: "xs" | "sm" | "default" | "md" | "lg" | "xl" | "2xl"
  className?: string
}

function AvatarGroup({ children, max = 4, size = "default", className }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children)
  const visibleChildren = childrenArray.slice(0, max)
  const remainingCount = childrenArray.length - max

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visibleChildren.map((child, index) => (
        <div
          key={index}
          className="transform transition-transform duration-300 hover:scale-110 hover:z-10"
        >
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={cn(
          "relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] ring-2 ring-black/20",
          size === "xs" && "size-6 text-[10px]",
          size === "sm" && "size-8 text-xs",
          size === "default" && "size-10 text-sm",
          size === "md" && "size-12 text-base",
          size === "lg" && "size-16 text-lg",
          size === "xl" && "size-20 text-xl",
          size === "2xl" && "size-24 text-2xl",
        )}>
          <span className="font-medium text-white/80">+{remainingCount}</span>
        </div>
      )}
    </div>
  )
}

// Premium Avatar with Status Indicator
interface AvatarWithStatusProps extends AvatarRootProps {
  status?: "online" | "offline" | "away" | "busy"
  src?: string
  alt?: string
  fallback?: string
}

function AvatarWithStatus({
  size = "default",
  variant = "default",
  status,
  src,
  alt,
  fallback,
  className,
  ...props
}: AvatarWithStatusProps) {
  const _size: keyof typeof statusSizes = size ?? "default"
  const statusColors = {
    online: "bg-emerald-500 ring-2 ring-black/20",
    offline: "bg-gray-500 ring-2 ring-black/20",
    away: "bg-yellow-500 ring-2 ring-black/20",
    busy: "bg-red-500 ring-2 ring-black/20",
  }

  const statusSizes = {
    xs: "size-1.5",
    sm: "size-2",
    default: "size-2.5",
    md: "size-3",
    lg: "size-4",
    xl: "size-5",
    "2xl": "size-6",
  }

  return (
    <div className="relative inline-block">
      <Avatar size={size} variant={variant} className={className} {...props}>
        {src && <AvatarImage src={src} alt={alt} />}
        <AvatarFallback>{fallback || (alt?.charAt(0) || "U")}</AvatarFallback>
      </Avatar>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-white",
            statusColors[status],
            statusSizes[_size]
          )}
        />
      )}
    </div>
  )
}

export { 
  Avatar, 
  AvatarImage, 
  AvatarFallback, 
  AvatarGroup, 
  AvatarWithStatus,
  avatarVariants 
}