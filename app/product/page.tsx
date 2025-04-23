import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, ShieldCheck } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src="/bluetooth-transmitter.jpg"
              alt="BT5.0 Bluetooth 5.0 Transmitter"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">BT5.0 Bluetooth 5.0 Transmitter</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 (128 reviews)</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="text-3xl font-bold">$49.99</div>
            <div className="text-sm text-muted-foreground">Free shipping on orders over $35</div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Free 2-3 day shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <Button size="lg" className="w-full">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              Buy Now
            </Button>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 space-y-4">
                <p>
                  The BT5.0 Bluetooth 5.0 Transmitter is a premium audio device that transforms any audio source into a
                  Bluetooth transmitter. Connect to your TV, computer, or any device with a 3.5mm audio output, RCA, or
                  optical (TOSLINK) connection.
                </p>
                <p>
                  With support for the latest Bluetooth 5.0 technology, you'll enjoy extended range, improved battery
                  life, and superior sound quality. The transmitter supports aptX Low Latency technology, ensuring
                  perfect audio-visual sync for watching movies or gaming.
                </p>
                <p>
                  Pair with up to two Bluetooth headphones or speakers simultaneously, allowing you to share your audio
                  experience with others.
                </p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <ul className="grid gap-2 text-sm">
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Bluetooth Version</span>
                    <span>5.0</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Range</span>
                    <span>Up to 100ft (30m)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Battery Life</span>
                    <span>Up to 20 hours</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Charging Time</span>
                    <span>2 hours</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Audio Codecs</span>
                    <span>aptX, aptX Low Latency, SBC</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Connections</span>
                    <span>3.5mm, RCA, Optical (TOSLINK)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Dimensions</span>
                    <span>3.5" x 2.5" x 0.8"</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="font-medium">Weight</span>
                    <span>2.4 oz (68g)</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
