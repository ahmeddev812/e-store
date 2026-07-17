"use client"

import Link from "next/link"

interface LogoProps {
  showText?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
  link?: boolean
}

const flameSvg = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#F57224" />
        <stop offset="60%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#D4A853" />
      </linearGradient>
      <filter id="flameGlow">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#flameGlow)">
      <path
        d="M16 2C16 2 8 10 8 17C8 21.4183 11.5817 25 16 25C20.4183 25 24 21.4183 24 17C24 10 16 2 16 2Z"
        fill="url(#flameGrad)"
      />
      <path
        d="M16 8C16 8 12 13 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13 16 8 16 8Z"
        fill="white"
        fillOpacity="0.4"
      />
      <path
        d="M14 20C14 22 15.5 24 16 26C16.5 24 18 22 18 20H14Z"
        fill="#D4A853"
        fillOpacity="0.6"
      />
    </g>
  </svg>
)

const sizes = { sm: "size-6", md: "size-8", lg: "size-10" }
const textSizes = { sm: "text-lg", md: "text-xl", lg: "text-3xl" }

function LogoContent({ showText, size, className }: { showText?: boolean; size?: "sm" | "md" | "lg"; className?: string }) {
  const s = size || "md"
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <div className={`relative ${sizes[s]}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F57224] to-[#D4A853] blur-md opacity-50" />
        <div className="relative">{flameSvg}</div>
      </div>
      {showText !== false && (
        <div className="flex flex-col">
          <span className={`${textSizes[s]} font-bold tracking-wider bg-gradient-to-r from-[#D4A853] via-[#F57224] to-[#D4A853] bg-clip-text text-transparent`}>
            BLAZECART
          </span>
        </div>
      )}
    </div>
  )
}

export function Logo(props: LogoProps) {
  if (props.link !== false) {
    return (
      <Link href="/" className="group relative flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#F57224] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          <LogoContent {...props} />
        </div>
      </Link>
    )
  }
  return <LogoContent {...props} />
}

export function FlameIcon({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const s = { sm: "size-6", md: "size-8", lg: "size-10" }[size]
  return (
    <div className={`relative ${s} ${className || ""}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F57224] to-[#D4A853] blur-md opacity-50" />
      <div className="relative">{flameSvg}</div>
    </div>
  )
}
