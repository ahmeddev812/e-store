"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Camera, Save, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/toast"
import { getInitials } from "@/lib/utils"

interface UserSession {
  id: string
  name: string
  email: string
  role: string
}

interface UserProfile {
  name: string
  phone: string
  address: string
}

export default function ProfileSettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserSession | null>(null)
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    phone: "",
    address: "",
  })

  useEffect(() => {
    const raw = localStorage.getItem("user_session")
    if (!raw) {
      router.push("/login")
      return
    }
    const parsed = JSON.parse(raw) as UserSession
    setUser(parsed)

    const saved = localStorage.getItem("user_profile")
    if (saved) {
      setProfile(JSON.parse(saved))
    } else {
      setProfile({ name: parsed.name, phone: "", address: "" })
    }
  }, [router])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProfile((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem("user_profile", JSON.stringify(profile))
    toast.success("Profile saved successfully")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-[#0B1120] p-4 md:p-8 bg-[radial-gradient(ellipse_at_top,rgba(245,114,36,0.03)_0%,transparent_60%)]">
      <div className="mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="mb-8 text-2xl font-bold text-white">Profile Settings</h1>

          <Card className="mb-6">
            <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row">
              <div className="relative">
                <Avatar className="size-20 border-2 border-[#F57224]/30">
                  <AvatarFallback className="bg-[#1E293B] text-xl text-white">
                    {getInitials(profile.name || user.name)}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full border border-white/20 bg-[#1E293B] text-white/70 hover:text-white">
                  <Camera className="size-3.5" />
                </button>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">{profile.name || user.name}</p>
                <p className="text-sm text-white/50">{user.email}</p>
                <p className="mt-1 text-xs text-white/30">Click the camera icon to change avatar</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-5 text-[#F57224]" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={profile.name} onChange={handleChange} placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={profile.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Shipping Address</Label>
                  <Textarea id="address" value={profile.address} onChange={handleChange} placeholder="123 Main Street, City, Country" rows={3} />
                </div>

                <Separator />

                <Button type="submit" className="w-full gap-2 sm:w-auto shadow-glow">
                  <Save className="size-4" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
