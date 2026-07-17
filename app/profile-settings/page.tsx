"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser, useClerk } from "@clerk/nextjs"
import { motion } from "framer-motion"
import { Camera, Save, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { getInitials } from "@/lib/utils"

interface UserProfile {
  name: string
  phone: string
  address: string
}

export default function ProfileSettingsPage() {
  const router = useRouter()
  const { user, isLoaded, isSignedIn } = useUser()
  const { signOut } = useClerk()
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    phone: "",
    address: "",
  })

  useEffect(() => {
    if (!isLoaded) return
    if (!isSignedIn) {
      router.push("/login")
      return
    }

    const saved = localStorage.getItem("user_profile")
    if (saved) {
      setProfile(JSON.parse(saved))
    } else {
      setProfile({
        name: user?.fullName || user?.firstName || "",
        phone: "",
        address: "",
      })
    }
  }, [isLoaded, isSignedIn, user, router])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProfile((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem("user_profile", JSON.stringify(profile))
    toast.success("Profile saved successfully")
  }

  if (!isLoaded) return null
  if (!isSignedIn) return null

  const userName = user?.fullName || user?.firstName || "User"
  const userEmail = user?.primaryEmailAddress?.emailAddress || ""
  const userImage = user?.imageUrl

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 bg-[radial-gradient(ellipse_at_top,rgba(245,114,36,0.03)_0%,transparent_60%)]">
      <div className="mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Profile Settings</h1>
            <Button onClick={() => signOut({ redirectUrl: "/" })} variant="outline" className="gap-2 border-red-500/30 text-red-400 hover:bg-red-500/10">
              <LogOut className="size-4" />
              Logout
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row">
              <div className="relative">
                <Avatar className="size-20 border-2 border-[#F57224]/30">
                  <AvatarImage src={userImage} />
                  <AvatarFallback className="bg-muted text-xl text-muted-foreground">
                    {getInitials(userName)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-foreground">{userName}</p>
                <p className="text-sm text-muted-foreground">{userEmail}</p>
                <p className="mt-1 text-xs text-foreground/30">Managed by Clerk</p>
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
