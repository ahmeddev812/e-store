"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "glass-card",
        premium: "glass-premium hover:shadow-[0_0_40px_rgba(245,114,36,0.2)] hover:scale-[1.02]",
        glass: "glass-card backdrop-blur-md",
        bordered: "border border-white/10 bg-white/5 backdrop-blur-sm",
        gradient: "bg-gradient-to-br from-[#F57224]/10 via-[#F57224]/5 to-transparent border border-white/10",
        dark: "bg-[#0f0f1a] border border-white/10",
      },
      interactive: {
        true: "cursor-pointer hover:border-[#F57224]/30 hover:shadow-[0_0_30px_rgba(245,114,36,0.15)] active:scale-[0.99]",
        false: "",
      },
      padding: {
        none: "",
        sm: "p-3",
        default: "p-5",
        lg: "p-6",
        xl: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
      padding: "default",
    },
  }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  asChild?: boolean
}

function Card({
  className,
  variant,
  interactive,
  padding,
  children,
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, interactive, padding }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-lg font-semibold text-white leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-white/50", className)}
      {...props}
    />
  )
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn("", className)}
      {...props}
    />
  )
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2 border-t border-white/10 mt-4 pt-4",
        className
      )}
      {...props}
    />
  )
}

// Premium Card with Image
interface CardWithImageProps extends CardProps {
  image: string
  imageAlt?: string
  imagePosition?: "top" | "bottom" | "left" | "right"
  overlay?: boolean
}

function CardWithImage({
  image,
  imageAlt = "",
  imagePosition = "top",
  overlay = false,
  children,
  className,
  ...props
}: CardWithImageProps) {
  const imageClasses = {
    top: "rounded-t-xl",
    bottom: "rounded-b-xl order-last",
    left: "rounded-l-xl w-1/3",
    right: "rounded-r-xl w-1/3 order-last",
  }

  const containerClasses = {
    top: "flex flex-col",
    bottom: "flex flex-col",
    left: "flex flex-row",
    right: "flex flex-row",
  }

  return (
    <Card className={cn(containerClasses[imagePosition], className)} {...props}>
      <div className={cn(
        "relative overflow-hidden",
        imagePosition === "left" || imagePosition === "right" ? "w-1/3" : "w-full",
        imageClasses[imagePosition]
      )}>
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        )}
      </div>
      <div className={cn(
        "flex-1",
        imagePosition === "top" || imagePosition === "bottom" ? "p-5" : "p-4"
      )}>
        {children}
      </div>
    </Card>
  )
}

// Premium Card Group
interface CardGroupProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

function CardGroup({ children, columns = 3, gap = "md", className }: CardGroupProps) {
  const gapClasses = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  }

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid", gapClasses[gap], columnClasses[columns], className)}>
      {children}
    </div>
  )
}

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardWithImage,
  CardGroup,
  cardVariants
}