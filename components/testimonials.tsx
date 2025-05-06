import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Influencer Hub has transformed my career. I've connected with amazing brands and increased my income by 40% in just three months!",
      type: "influencer",
    },
    {
      name: "Mark Davis",
      role: "Marketing Director, StyleCo",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Finding the right influencers used to be a challenge. Now we can easily connect with authentic creators who truly represent our brand values.",
      type: "brand",
    },
    {
      name: "Jessica Lee",
      role: "Lifestyle Blogger",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The discount program is brilliant! I promote products I genuinely love and get amazing deals. It's a win-win for everyone involved.",
      type: "influencer",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-orange-100 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700 flex-grow">{testimonial.content}</p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                testimonial.type === "influencer" ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"
              }`}
            >
              {testimonial.type === "influencer" ? "Influencer" : "Brand"}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
