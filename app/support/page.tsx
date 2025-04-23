import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, MessageSquare, FileQuestion, Package } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="mb-2">Support Center</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Can We Help You?</h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find answers to common questions or contact our support team for assistance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <Card className="flex flex-col">
          <CardHeader>
            <FileQuestion className="h-8 w-8 text-primary mb-2" />
            <CardTitle>General FAQs</CardTitle>
            <CardDescription>Find answers to common questions about our Bluetooth 5.0 transmitter</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <li>• What is a Bluetooth transmitter?</li>
              <li>• What makes Bluetooth 5.0 better?</li>
              <li>• How to connect to multiple devices</li>
              <li>• Battery life and charging</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/support/general">View General FAQs</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <Package className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Shipping FAQs</CardTitle>
            <CardDescription>Information about shipping, delivery times, and return policies</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <li>• Shipping timeframes</li>
              <li>• International shipping</li>
              <li>• Free shipping eligibility</li>
              <li>• Returns and exchanges</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/support/shipping">View Shipping FAQs</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <MessageSquare className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Get in touch with our customer support team for personalized assistance</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help with any questions or issues you
              might have.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="rounded-lg bg-muted p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Product Documentation</h2>
            <p className="text-muted-foreground mb-6">
              Download user manuals, quick start guides, and other helpful documentation for your BT5.0 products.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <Link href="#" className="hover:underline">
                  BT5.0 Transmitter User Manual
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <Link href="#" className="hover:underline">
                  Quick Start Guide
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <Link href="#" className="hover:underline">
                  Troubleshooting Guide
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Documentation"
              alt="Product Documentation"
              width={300}
              height={300}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
