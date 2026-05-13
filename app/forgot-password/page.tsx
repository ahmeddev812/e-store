"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, ArrowLeft, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass-card p-8">
          {sent ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle className="size-8" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Password reset link sent!</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Password reset link sent! (Demo)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A password reset link has been sent to <span className="text-[#F57224]">{email}</span>
              </p>
              <Link href="/login">
                <Button variant="ghost" className="mt-6 gap-2">
                  <ArrowLeft className="size-4" /> Back to Login
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-foreground">Forgot Password?</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" disabled={loading || !email} className="w-full gap-2 shadow-glow">
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Reset Link
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/login" className="inline-flex items-center gap-1 text-sm text-[#F57224] hover:underline">
                  <ArrowLeft className="size-3" /> Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
