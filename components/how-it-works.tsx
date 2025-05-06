import { ArrowRight, CheckCircle, Users, Award } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up as an influencer or brand and complete your profile to get started.",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Connect & Collaborate",
      description: "Find the perfect match for your brand or discover exciting opportunities as an influencer.",
      icon: ArrowRight,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Grow & Earn",
      description: "Unlock discounts, earn from collaborations, and grow your presence in the digital world.",
      icon: Award,
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
          <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center mb-4`}>
            <step.icon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
          <div className="mt-4 flex items-center text-orange-600">
            <span className="font-medium mr-2">Step {index + 1}</span>
            <CheckCircle className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  )
}
