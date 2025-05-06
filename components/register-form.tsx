"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Icons } from "@/components/icons"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

interface RegisterFormProps {
  userRole: string
}

export function RegisterForm({ userRole }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would register the user here
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {userRole === "influencer" ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="social-username">Social Media Username</Label>
            <Input id="social-username" placeholder="@username" required />
          </div>
          <div className="space-y-2">
            <Label>Social Media Platforms</Label>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-orange-200 hover:bg-orange-100 hover:text-orange-600"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-orange-200 hover:bg-orange-100 hover:text-orange-600"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-orange-200 hover:bg-orange-100 hover:text-orange-600"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-orange-200 hover:bg-orange-100 hover:text-orange-600"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="platform">Primary Platform</Label>
            <Select defaultValue="instagram">
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="business-name">Business Name</Label>
            <Input id="business-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website (Optional)</Label>
            <Input id="website" type="url" placeholder="https://example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select defaultValue="fashion">
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="beauty">Beauty</SelectItem>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="food">Food & Beverage</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="name@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+880 1XXX-XXXXXX" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" required />
      </div>

      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
        {isLoading ? (
          <>
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button variant="outline" type="button" className="border-gray-300">
          <Icons.google className="h-4 w-4" />
        </Button>
        <Button variant="outline" type="button" className="border-gray-300">
          <Icons.facebook className="h-4 w-4" />
        </Button>
        <Button variant="outline" type="button" className="border-gray-300">
          <Icons.apple className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
