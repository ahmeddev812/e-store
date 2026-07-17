"use client"

import { SignUp } from "@clerk/nextjs"
import { motion } from "framer-motion"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1120] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <SignUp
          routing="path"
          path="/register"
          signInUrl="/login"
          fallbackRedirectUrl="/dashboard"
        />
      </motion.div>
    </div>
  )
}
