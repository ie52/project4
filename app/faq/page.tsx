import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the range of the SonicWave Bluetooth 5.0 Transmitter?",
      answer:
        "The SonicWave has a range of up to 100 feet (30 meters) in open space. However, walls and other obstacles may reduce this range. With Bluetooth 5.0 technology, it offers significantly better range than previous Bluetooth versions.",
    },
    {
      question: "Can I connect multiple headphones to the transmitter simultaneously?",
      answer:
        "Yes, the SonicWave supports dual-link functionality, allowing you to connect two Bluetooth headphones or speakers at the same time. This is perfect for shared viewing experiences or when you want to watch TV with a partner without disturbing others.",
    },
    {
      question: "Does the transmitter work with all TVs?",
      answer:
        "The SonicWave is designed to work with any TV that has a 3.5mm audio output, RCA outputs, or an optical (TOSLINK) output. This covers the vast majority of TVs on the market. All necessary cables and adapters are included in the package.",
    },
    {
      question: "How long does the battery last?",
      answer:
        "The built-in rechargeable battery provides up to 20 hours of continuous use on a single charge. Charging time is approximately 2 hours using the included USB-C cable.",
    },
    {
      question: "Will there be any audio delay when watching TV or gaming?",
      answer:
        "The SonicWave supports aptX Low Latency technology, which reduces audio delay to imperceptible levels (less than 40ms). This ensures perfect audio-visual sync for activities like watching movies or gaming. Note that your receiving device (headphones or speakers) must also support aptX Low Latency to take advantage of this feature.",
    },
    {
      question: "Can I use the transmitter while it's charging?",
      answer:
        "Yes, the SonicWave can be used while charging, allowing for continuous use even when the battery is low.",
    },
    {
      question: "Is the SonicWave compatible with all Bluetooth headphones?",
      answer:
        "Yes, the SonicWave is compatible with all Bluetooth headphones and speakers, regardless of brand or model. It supports multiple Bluetooth codecs including SBC, aptX, and aptX Low Latency for optimal compatibility.",
    },
    {
      question: "How do I pair my headphones with the transmitter?",
      answer:
        "Pairing is simple: turn on the transmitter, press and hold the pairing button until the LED indicator flashes rapidly, then put your headphones in pairing mode. The devices should connect automatically. For detailed instructions, please refer to the user manual.",
    },
    {
      question: "Does the SonicWave come with a warranty?",
      answer:
        "Yes, the SonicWave comes with a 1-year manufacturer's warranty against defects in materials and workmanship. We also offer a 30-day money-back guarantee if you're not completely satisfied with your purchase.",
    },
    {
      question: "Can I use the SonicWave with non-Bluetooth devices?",
      answer:
        "The SonicWave is a transmitter that sends Bluetooth signals to Bluetooth receivers (like headphones or speakers). It cannot make non-Bluetooth headphones or speakers work wirelessly. However, it can connect to virtually any audio source that has a 3.5mm, RCA, or optical output.",
    },
  ]

  const categories = [
    { name: "Setup & Installation", count: 8 },
    { name: "Connectivity", count: 12 },
    { name: "Battery & Charging", count: 5 },
    { name: "Compatibility", count: 10 },
    { name: "Troubleshooting", count: 15 },
    { name: "Warranty & Returns", count: 6 },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="mb-2">Support</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find answers to common questions about the SonicWave Bluetooth 5.0 Transmitter
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>FAQ Categories</CardTitle>
              <CardDescription>Browse by topic</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <Link href="#" className="text-sm hover:underline">
                      {category.name}
                    </Link>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
              <CardDescription>Our support team is here for you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Can't find the answer you're looking for? Contact our customer support team.
              </p>
              <Button className="w-full" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Accordion */}
        <div className="md:col-span-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Resources */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">User Manual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download the complete user manual for detailed instructions and troubleshooting.
                  </p>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Quick Start Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get up and running quickly with our easy-to-follow quick start guide.
                  </p>
                  <Button variant="outline" size="sm">
                    View Guide
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Watch step-by-step video tutorials for setting up and using your SonicWave.
                  </p>
                  <Button variant="outline" size="sm">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Firmware Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Keep your SonicWave up to date with the latest firmware updates and improvements.
                  </p>
                  <Button variant="outline" size="sm">
                    Check Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-muted p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="max-w-[600px] mx-auto mb-6 text-muted-foreground">
          Our dedicated support team is ready to help you with any questions or issues you might have.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/product">View Product Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
