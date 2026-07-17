"use client"

import { SignIn } from "@clerk/nextjs"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1120] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          fallbackRedirectUrl="/dashboard"
        />
      </motion.div>
    </div>
  )
}
