"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { defaultViewport, easeTransition, fadeUp } from "@/lib/motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  icon?: LucideIcon
  iconWrapperClassName?: string
  action?: { label: string; href: string }
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  icon: Icon,
  iconWrapperClassName,
  action,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center"

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={easeTransition}
      className={cn(
        "mb-10 md:mb-12",
        centered ? "text-center" : "flex flex-wrap items-end justify-between gap-4",
        className
      )}
    >
      <div className={cn("space-y-3", centered && "mx-auto max-w-2xl")}>
        {badge && (
          <Badge className="border-none bg-primary/10 text-primary">{badge}</Badge>
        )}
        <div className={cn("flex gap-4", centered ? "flex-col items-center" : "items-start")}>
          {Icon && (
            <div
              className={cn(
                "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/10 ring-1 ring-primary/10",
                iconWrapperClassName
              )}
            >
              <Icon className="size-6 text-primary" />
            </div>
          )}
          <div className={cn(centered && "space-y-2")}>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {title}
            </h2>
            {description && (
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {action && !centered && (
        <Link href={action.href}>
          <Button variant="ghost" className="group text-primary hover:bg-primary/10">
            {action.label}
            <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      )}

      {action && centered && (
        <Link href={action.href} className="mt-6 inline-block">
          <Button variant="outline" className="group border-border">
            {action.label}
            <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      )}
    </motion.div>
  )
}
