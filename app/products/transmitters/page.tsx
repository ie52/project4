import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function TransmittersPage() {
  const products = [
    {
      id: 1,
      name: "SonicWave BT-500",
      description: "Premium Bluetooth 5.0 Transmitter with aptX Low Latency",
      price: 49.99,
      rating: 4.9,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=300&text=BT-500",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "SonicWave BT-300",
      description: "Compact Bluetooth 5.0 Transmitter for On-the-Go",
      price: 39.99,
      rating: 4.7,
      reviews: 86,
      image: "/placeholder.svg?height=300&width=300&text=BT-300",
    },
    {
      id: 3,
      name: "SonicWave BT-700",
      description: "Professional Bluetooth 5.0 Transmitter with Extended Range",
      price: 69.99,
      rating: 4.8,
      reviews: 54,
      image: "/placeholder.svg?height=300&width=300&text=BT-700",
      badge: "New",
    },
    {
      id: 4,
      name: "SonicWave BT-100",
      description: "Entry-level Bluetooth 5.0 Transmitter",
      price: 29.99,
      rating: 4.5,
      reviews: 112,
      image: "/placeholder.svg?height=300&width=300&text=BT-100",
      badge: "Value Pick",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col items-start space-y-4 mb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <span>Bluetooth Transmitters</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bluetooth Transmitters</h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Transform any audio device into a Bluetooth transmitter with our premium range of products
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover transition-transform hover:scale-105"
              />
              {product.badge && <Badge className="absolute top-2 right-2">{product.badge}</Badge>}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-muted p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose SonicWave Transmitters?</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Latest Bluetooth 5.0 technology for extended range and stability</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>aptX Low Latency support for perfect audio-visual sync</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Connect two devices simultaneously for shared listening</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Long battery life with quick charging via USB-C</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Universal compatibility with any audio source</span>
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <Link href="/products/transmitters/compare">Compare Models</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=400&width=400&text=Transmitters"
              alt="SonicWave Transmitters"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
