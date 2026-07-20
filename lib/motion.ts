import type { Variants, Transition } from "framer-motion"

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

export const defaultViewport = { once: true, margin: "-48px" as const }

export const springTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
}

export const easeTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
}
