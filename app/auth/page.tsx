"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"
import { RegisterForm } from "@/components/register-form"

export default function AuthPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "login"
  const role = searchParams.get("role") || "influencer"

  const [activeTab, setActiveTab] = useState(type)
  const [userRole, setUserRole] = useState(role)

  useEffect(() => {
    setActiveTab(type)
    if (role) {
      setUserRole(role)
    }
  }, [type, role])

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Influencer Hub Logo"
            width={32}
            height={32}
            className="rounded-md bg-orange-500"
          />
          <h1 className="text-lg font-bold text-orange-800">Influencer Hub</h1>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">Welcome back</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <LoginForm />
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2">
                  <div className="text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link
                      href={`/auth?type=register&role=${userRole}`}
                      className="text-orange-600 hover:text-orange-800"
                      onClick={() => setActiveTab("register")}
                    >
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">Create an account</CardTitle>
                  <CardDescription>
                    Join our platform as a{" "}
                    <span className="inline-flex gap-1">
                      <Link
                        href="/auth?type=register&role=influencer"
                        className={`font-medium ${userRole === "influencer" ? "text-orange-600 underline" : "text-gray-600 hover:text-orange-600"}`}
                        onClick={() => setUserRole("influencer")}
                      >
                        Influencer
                      </Link>
                      {" or "}
                      <Link
                        href="/auth?type=register&role=brand"
                        className={`font-medium ${userRole === "brand" ? "text-orange-600 underline" : "text-gray-600 hover:text-orange-600"}`}
                        onClick={() => setUserRole("brand")}
                      >
                        Brand
                      </Link>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RegisterForm userRole={userRole} />
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2">
                  <div className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href={`/auth?type=login&role=${userRole}`}
                      className="text-orange-600 hover:text-orange-800"
                      onClick={() => setActiveTab("login")}
                    >
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © 2024 Influencer Hub. All rights reserved.
      </footer>
    </div>
  )
}
