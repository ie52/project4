import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const categories = [
    {
      title: "Bluetooth Transmitters",
      description: "Connect any audio source to Bluetooth headphones or speakers",
      image: "/placeholder.svg?height=400&width=600&text=Transmitters",
      link: "/products/transmitters",
      featured: true,
    },
    {
      title: "Bluetooth Receivers",
      description: "Add Bluetooth capability to your existing audio systems",
      image: "/placeholder.svg?height=400&width=600&text=Receivers",
      link: "/products/receivers",
      featured: true,
    },
    {
      title: "Accessories",
      description: "Enhance your audio experience with our range of accessories",
      image: "/placeholder.svg?height=400&width=600&text=Accessories",
      link: "/products/accessories",
    },
    {
      title: "New Arrivals",
      description: "Check out our latest products and innovations",
      image: "/placeholder.svg?height=400&width=600&text=New+Arrivals",
      link: "/products/new",
      badge: "New",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="mb-2">Our Products</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Premium Bluetooth Audio Solutions
        </h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Discover our range of high-quality Bluetooth transmitters, receivers, and accessories
        </p>
      </div>

      {/* Featured Categories */}
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {categories
          .filter((cat) => cat.featured)
          .map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button asChild>
                    <Link href={category.link}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
      </div>

      {/* All Categories */}
      <h2 className="text-2xl font-bold mb-6">All Categories</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              {category.badge && <Badge className="absolute top-2 right-2">{category.badge}</Badge>}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{category.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
              <Button variant="link" className="px-0 mt-2" asChild>
                <Link href={category.link}>
                  View Products
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Best Sellers */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Best Sellers</h2>
          <Button variant="outline" asChild>
            <Link href="/products/best-sellers">View All</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={`/placeholder-product.png?height=300&width=300&text=Product${i}`}
                  alt={`Product ${i}`}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2">Best Seller</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">SonicWave Product {i}</h3>
                <p className="text-sm text-muted-foreground mt-1">Premium Bluetooth 5.0 device</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">${(39.99 + i * 10).toFixed(2)}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-primary text-primary-foreground p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Product Is Right For You?</h2>
            <p className="mb-6">
              Our product specialists can help you find the perfect solution for your needs. Contact us for personalized
              recommendations.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
          </div>
          <div className="hidden md:flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Expert+Advice"
              alt="Expert Advice"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
