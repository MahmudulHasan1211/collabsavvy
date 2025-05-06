import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Testimonials } from "@/components/testimonials"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedBrands } from "@/components/featured-brands"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Influencer Hub Logo"
              width={40}
              height={40}
              className="rounded-md bg-orange-500"
            />
            <h1 className="text-xl font-bold text-orange-800">Influencer Hub</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-gray-700 hover:text-orange-600 transition-colors">
              How It Works
            </Link>
            <Link href="#for-influencers" className="text-gray-700 hover:text-orange-600 transition-colors">
              For Influencers
            </Link>
            <Link href="#for-brands" className="text-gray-700 hover:text-orange-600 transition-colors">
              For Brands
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth?type=login">
              <Button variant="ghost" className="text-orange-700 hover:text-orange-800 hover:bg-orange-100">
                Login
              </Button>
            </Link>
            <Link href="/auth?type=register">
              <Button className="bg-orange-500 text-white hover:bg-orange-600">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <div className="relative h-[80vh] bg-black">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight mb-6">
            Connect With <br /> Influencers and Brands
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/auth?type=register&role=influencer">
              <Button size="lg" className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600">
                Join as an Influencer
              </Button>
            </Link>
            <Link href="/auth?type=register&role=brand">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white border-white text-gray-800 hover:bg-gray-100"
              >
                Join as a Brand
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">How It Works</h2>
          <HowItWorks />
        </div>
      </section>

      {/* For Influencers Section */}
      <section id="for-influencers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">For Influencers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">Unlock Your Potential</h3>
              <p className="text-gray-700 mb-6">
                Join our platform to collaborate with top brands, grow your audience, and unlock exclusive discounts and
                opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get Discounts</h4>
                    <p className="text-gray-600 text-sm">
                      Promote brand products or services on your social media before receiving discounts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Find Brand Collaborations</h4>
                    <p className="text-gray-600 text-sm">
                      Browse available brand campaigns and bid on collaborations that match your niche.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Verify Your Social Media</h4>
                    <p className="text-gray-600 text-sm">
                      Connect your social accounts to verify your influence and unlock more opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/auth?type=register&role=influencer">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600">Join as an Influencer</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-6 max-w-md">
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-48 bg-orange-100 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Get Discounts"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Get Discounts</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Promote brands and receive compensable discounts on purchases.
                    </p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Promote Now</Button>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-48 bg-orange-100 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Find Collaborations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Find Brand Collaborations</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Browse campaigns and collaborate for brand partnerships.
                    </p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Browse Campaigns</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section id="for-brands" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">For Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Find the Perfect Influencers</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">ChicWear</h4>
                      <p className="text-sm text-gray-600">Clothing & Accessories</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-sm font-medium text-orange-700">$100-300</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      <Youtube className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">EcoHome</h4>
                      <p className="text-sm text-gray-600">Home & Living</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-sm font-medium text-orange-700">$400-1,000</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">NutriBoost</h4>
                      <p className="text-sm text-gray-600">Health & Wellness</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-sm font-medium text-orange-700">$150-400</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Create Campaign</Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">Amplify Your Brand</h3>
              <p className="text-gray-700 mb-6">
                Connect with authentic influencers who can showcase your products to their engaged audiences and drive
                real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Create Collaboration Campaigns</h4>
                    <p className="text-gray-600 text-sm">
                      Define your budget, requirements, and target influencer demographics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Review Influencer Proposals</h4>
                    <p className="text-gray-600 text-sm">
                      Compare bids based on experience and engagement metrics to find the perfect match.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Track Performance</h4>
                    <p className="text-gray-600 text-sm">
                      Monitor campaign results and engagement metrics in real-time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/auth?type=register&role=brand">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600">Join as a Brand</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-orange-800 mb-10">Trusted by Leading Brands</h2>
          <FeaturedBrands />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">What Our Users Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Influence?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our platform today and connect with brands and influencers to create meaningful collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth?type=register&role=influencer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100">
                Join as an Influencer
              </Button>
            </Link>
            <Link href="/auth?type=register&role=brand">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-orange-700"
              >
                Join as a Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Influencer Hub Logo"
                  width={40}
                  height={40}
                  className="rounded-md bg-orange-500"
                />
                <h3 className="text-xl font-bold">Influencer Hub</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting influencers and brands for meaningful collaborations and growth.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Influencers</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Get Discounts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Find Collaborations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Brands</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Create Campaigns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Find Influencers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 Influencer Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
