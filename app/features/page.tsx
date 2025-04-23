import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bluetooth, Battery, Headphones, Tv, Smartphone, Laptop, Speaker, Music, Zap, Clock } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="mb-2">Premium Features</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Discover the SonicWave Advantage
        </h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Our Bluetooth 5.0 transmitter is packed with features designed to deliver the ultimate audio experience
        </p>
      </div>

      {/* Main Features */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          {
            icon: <Bluetooth className="h-10 w-10" />,
            title: "Bluetooth 5.0 Technology",
            description:
              "The latest Bluetooth technology for faster transmission, extended range, and improved reliability.",
          },
          {
            icon: <Headphones className="h-10 w-10" />,
            title: "Dual Device Connection",
            description:
              "Connect two Bluetooth headphones or speakers simultaneously for shared listening experiences.",
          },
          {
            icon: <Music className="h-10 w-10" />,
            title: "aptX Low Latency",
            description:
              "Experience HD audio with minimal delay, perfect for watching movies or gaming without audio lag.",
          },
          {
            icon: <Battery className="h-10 w-10" />,
            title: "20-Hour Battery Life",
            description:
              "Long-lasting rechargeable battery provides up to 20 hours of continuous use on a single charge.",
          },
          {
            icon: <Zap className="h-10 w-10" />,
            title: "Universal Compatibility",
            description: "Works with any device featuring a 3.5mm audio output, RCA, or optical (TOSLINK) connection.",
          },
          {
            icon: <Clock className="h-10 w-10" />,
            title: "Quick Pairing",
            description: "Simple one-touch pairing process gets you connected and enjoying your audio in seconds.",
          },
        ].map((feature, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="mb-2 text-primary">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Perfect for Any Scenario</h2>
          <p className="max-w-[800px] text-gray-500 dark:text-gray-400">
            The SonicWave Bluetooth 5.0 Transmitter adapts to your lifestyle
          </p>
        </div>

        <Tabs defaultValue="tv" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="tv">TV & Home Theater</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
            <TabsTrigger value="exercise">Exercise</TabsTrigger>
          </TabsList>
          {[
            {
              id: "tv",
              title: "TV & Home Theater",
              description:
                "Transform your TV viewing experience with wireless audio. Connect the SonicWave to your TV and enjoy private listening without disturbing others. Perfect for late-night movies or when you need to keep the volume down.",
              image: "/placeholder.svg?height=400&width=600&text=TV+Setup",
            },
            {
              id: "gaming",
              title: "Gaming",
              description:
                "Level up your gaming experience with lag-free wireless audio. The aptX Low Latency technology ensures perfect audio-visual sync, giving you the competitive edge in fast-paced games.",
              image: "/placeholder.svg?height=400&width=600&text=Gaming+Setup",
            },
            {
              id: "travel",
              title: "Travel",
              description:
                "Make travel more enjoyable by connecting to in-flight entertainment systems or hotel TVs. Compact and portable, the SonicWave is the perfect travel companion for audiophiles on the go.",
              image: "/placeholder.svg?height=400&width=600&text=Travel+Setup",
            },
            {
              id: "exercise",
              title: "Exercise",
              description:
                "Connect to gym equipment or your personal devices for a wireless workout experience. The stable connection ensures your music keeps playing even as you move around the gym.",
              image: "/placeholder.svg?height=400&width=600&text=Exercise+Setup",
            },
          ].map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">{tab.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{tab.description}</p>
                  <Button asChild>
                    <Link href="/product">Get Yours Today</Link>
                  </Button>
                </div>
                <div className="order-first md:order-last">
                  <Image
                    src={tab.image || "/placeholder.svg"}
                    alt={tab.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Compatible Devices */}
      <div className="mb-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Works With All Your Devices</h2>
          <p className="max-w-[800px] text-gray-500 dark:text-gray-400">
            The SonicWave connects to virtually any audio source
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Tv className="h-12 w-12 mx-auto" />, name: "TVs" },
            { icon: <Laptop className="h-12 w-12 mx-auto" />, name: "Computers" },
            { icon: <Smartphone className="h-12 w-12 mx-auto" />, name: "Smartphones" },
            { icon: <Speaker className="h-12 w-12 mx-auto" />, name: "Audio Systems" },
          ].map((device, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <div className="text-primary mb-4">{device.icon}</div>
              <h3 className="font-medium">{device.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-lg bg-primary text-primary-foreground p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Superior Sound?</h2>
            <p className="mb-6">
              Get your SonicWave Bluetooth 5.0 Transmitter today with free shipping and a 30-day money-back guarantee.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/product">Buy Now - $49.99</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="SonicWave Bluetooth 5.0 Transmitter"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
