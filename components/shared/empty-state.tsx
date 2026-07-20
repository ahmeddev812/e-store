"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { easeTransition, fadeUp, scaleIn } from "@/lib/motion"

interface EmptyStateAction {
  label: string
  href: string
  icon?: LucideIcon
}

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: EmptyStateAction
  secondaryAction?: EmptyStateAction
  className?: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  secondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center",
        className
      )}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={easeTransition}
        className="mb-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl"
      >
        <Icon className="size-14 text-muted-foreground/40 md:size-16" aria-hidden />
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ ...easeTransition, delay: 0.08 }}
        className="text-2xl font-bold text-foreground"
      >
        {title}
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ ...easeTransition, delay: 0.14 }}
        className="mt-2 max-w-md text-muted-foreground"
      >
        {description}
      </motion.p>

      {(action || secondaryAction) && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...easeTransition, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {action && (
            <Link href={action.href}>
              <Button>
                {action.icon && <action.icon className="size-4" />}
                {action.label}
              </Button>
            </Link>
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <Button variant="outline">{secondaryAction.label}</Button>
            </Link>
          )}
        </motion.div>
      )}
    </div>
  )
}
