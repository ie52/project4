import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, ShieldCheck, Headphones } from "lucide-react"
import { getPath } from "@/lib/utils-path"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">New Release</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">BT5.0 Bluetooth 5.0 Transmitter</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience crystal-clear audio with our premium Bluetooth 5.0 transmitter. Connect any device and enjoy
                wireless freedom with exceptional range and battery life.
              </p>
              <div>
                <Button size="lg" asChild>
                  <Link href={getPath("/product")}>Shop Now</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
              <Image
                src={getPath("/bluetooth-transmitter.jpg") || "/placeholder.svg"}
                width={500}
                height={500}
                alt="BT5.0 Bluetooth Transmitter"
                className="object-contain z-10 p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose BT5.0?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our Bluetooth 5.0 transmitter offers unparalleled performance and versatility
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <Headphones className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Superior Sound</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experience HD audio with aptX low latency technology for perfect audio-visual sync
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Extended Range</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enjoy up to 100ft of wireless range with stable connection through walls
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <Truck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Long Battery Life</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Up to 20 hours of continuous use with quick 2-hour recharge time</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Review */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Review</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Watch this detailed review of our Bluetooth 5.0 Transmitter
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-8">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/oMjW2AcGePI"
                title="Bluetooth 5.0 Transmitter Receiver for TV 2-in-1 Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ border: 0 }}
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Video by GoTechGeek: Bluetooth 5.0 Transmitter Receiver for TV 2-in-1 Review
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience Superior Sound?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get your BT5.0 Bluetooth 5.0 Transmitter today with free shipping and a 30-day money-back guarantee.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href={getPath("/product")}>Buy Now - $49.99</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
