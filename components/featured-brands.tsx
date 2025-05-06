import Image from "next/image"

export function FeaturedBrands() {
  const brands = [
    { name: "StyleCo", logo: "/placeholder.svg?height=80&width=160" },
    { name: "EcoHome", logo: "/placeholder.svg?height=80&width=160" },
    { name: "TechGiant", logo: "/placeholder.svg?height=80&width=160" },
    { name: "FitLife", logo: "/placeholder.svg?height=80&width=160" },
    { name: "BeautyGlow", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {brands.map((brand, index) => (
        <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src={brand.logo || "/placeholder.svg"}
            alt={brand.name}
            width={160}
            height={80}
            className="h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  )
}
