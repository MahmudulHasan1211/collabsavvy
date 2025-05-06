"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, Search, Bell, User, Menu } from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Influencer Hub Logo"
                  width={32}
                  height={32}
                  className="rounded-md bg-orange-500"
                />
                <span className="text-lg font-bold text-orange-800">Influencer Hub</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-orange-600 font-medium">
                Dashboard
              </Link>
              <Link href="/dashboard/campaigns" className="text-gray-600 hover:text-orange-600">
                Campaigns
              </Link>
              <Link href="/dashboard/analytics" className="text-gray-600 hover:text-orange-600">
                Analytics
              </Link>
              <Link href="/dashboard/messages" className="text-gray-600 hover:text-orange-600">
                Messages
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)}></div>
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Influencer Hub Logo"
                      width={32}
                      height={32}
                      className="rounded-md bg-orange-500"
                    />
                    <span className="text-lg font-bold text-orange-800">Influencer Hub</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <span className="sr-only">Close sidebar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                <nav className="space-y-4">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 rounded-md bg-orange-100 text-orange-800 font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/campaigns"
                    className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Campaigns
                  </Link>
                  <Link
                    href="/dashboard/analytics"
                    className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Analytics
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Messages
                  </Link>
                </nav>
              </div>
            </div>
          )}

          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-1 mb-6">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 rounded-md bg-orange-100 text-orange-800 font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/campaigns"
                  className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                >
                  Campaigns
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                >
                  Analytics
                </Link>
                <Link href="/dashboard/messages" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                  Messages
                </Link>
              </div>
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-500 px-4 mb-2">Account</h3>
                <div className="space-y-1">
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link href="/auth/logout" className="block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Influencer Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="overflow-hidden">
                <div className="h-40 bg-orange-100 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Get Discounts"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Get Discounts</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Promote brand products or services on your social media before receiving discounts.
                  </CardDescription>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Promote Now</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-40 bg-orange-100 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Find Collaborations"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Find Brand Collaborations</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Browse campaigns and collaborate for brand partnerships.
                  </CardDescription>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Browse Campaigns</Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Get Discounts</h2>

              <Tabs defaultValue="post">
                <TabsList className="mb-6">
                  <TabsTrigger value="post">Posting Options</TabsTrigger>
                  <TabsTrigger value="verification">Verification</TabsTrigger>
                </TabsList>

                <TabsContent value="post">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Choose Posting Option</h3>
                      <RadioGroup defaultValue="story">
                        <div className="flex items-start space-x-2 mb-3">
                          <RadioGroupItem value="post" id="post" />
                          <Label htmlFor="post" className="font-normal">
                            Post (Permanent)
                            <span className="block text-xs text-gray-500 mt-1">
                              Standard discount for permanent posts
                            </span>
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2 mb-3">
                          <RadioGroupItem value="story" id="story" />
                          <Label htmlFor="story" className="font-normal">
                            Story (Temporary)
                            <span className="block text-xs text-gray-500 mt-1">
                              Quick promotion through temporary stories
                            </span>
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both" className="font-normal">
                            Both (Higher discount)
                            <span className="block text-xs text-gray-500 mt-1">
                              Maximum discount for using both post types
                            </span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Content Format</h3>
                      <RadioGroup defaultValue="video">
                        <div className="flex items-start space-x-2 mb-3">
                          <RadioGroupItem value="photo" id="photo" />
                          <Label htmlFor="photo" className="font-normal">
                            Photo (Standard discount)
                            <span className="block text-xs text-gray-500 mt-1">Share photos featuring the product</span>
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="video" id="video" />
                          <Label htmlFor="video" className="font-normal">
                            Video (30 seconds minimum)
                            <span className="block text-xs text-gray-500 mt-1">Higher discount for video content</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Continue</Button>
                  </div>
                </TabsContent>

                <TabsContent value="verification">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="post-link">Social Media Post Link</Label>
                      <Input id="post-link" placeholder="https://instagram.com/p/..." />
                    </div>

                    <div className="space-y-3">
                      <Label>Upload Proof (Screenshot/Video)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                        <p className="text-xs text-gray-400">Supports: JPG, PNG, MP4 (Max 10MB)</p>
                        <Input type="file" className="hidden" id="file-upload" />
                        <Label htmlFor="file-upload" className="mt-4 inline-block">
                          <Button type="button" variant="outline" size="sm">
                            Browse Files
                          </Button>
                        </Label>
                      </div>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Submit for Verification
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Brand Collaborations</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input className="pl-9 w-[200px]" placeholder="Search campaigns..." />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "CleverTech",
                    industry: "Software Company",
                    type: "Sponsored Post",
                    budget: "$200–500",
                  },
                  {
                    name: "ChicWear",
                    industry: "Clothing & Accessories",
                    type: "Product Review",
                    budget: "$100–300",
                  },
                  {
                    name: "EcoHome",
                    industry: "Home & Living",
                    type: "Brand Endorsement",
                    budget: "$400–1,000",
                  },
                  {
                    name: "NutriBoost",
                    industry: "Health & Wellness",
                    type: "Sponsored Post",
                    budget: "$150–400",
                  },
                ].map((brand, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-lg">{brand.name}</CardTitle>
                      <CardDescription>{brand.industry}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="text-sm">
                        <p>
                          Collaboration: <span className="font-medium">{brand.type}</span>
                        </p>
                        <p>
                          Budget Range: <span className="font-medium">{brand.budget}</span>
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit Proposal</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
