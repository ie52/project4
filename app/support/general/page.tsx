import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GeneralFAQPage() {
  const faqs = [
    {
      question: "What is a Bluetooth transmitter?",
      answer:
        "A Bluetooth transmitter is a device that converts audio signals from a non-Bluetooth device (like a TV, computer, or audio system) into Bluetooth signals that can be received by Bluetooth headphones, speakers, or other audio devices. It essentially adds Bluetooth capability to devices that don't have it built-in.",
    },
    {
      question: "What makes Bluetooth 5.0 better than previous versions?",
      answer:
        "Bluetooth 5.0 offers several advantages over previous versions, including: faster data transfer speeds (up to 2 Mbps, twice as fast as Bluetooth 4.2), extended range (up to 4 times the range of Bluetooth 4.2), improved power efficiency for longer battery life, and better resistance to interference from other wireless devices.",
    },
    {
      question: "Can I connect multiple devices to the BT5.0 transmitter?",
      answer:
        "Yes, the BT5.0 Bluetooth 5.0 Transmitter supports dual device connection, allowing you to connect two Bluetooth headphones or speakers simultaneously. This is perfect for shared listening experiences, such as watching a movie with a partner.",
    },
    {
      question: "What is low latency and why is it important?",
      answer:
        "Low latency refers to the minimal delay between when an audio signal is transmitted and when it's received. This is particularly important when watching videos or playing games, as high latency can cause the audio to be out of sync with the video. The BT5.0 transmitter features low latency technology to ensure perfect synchronization between audio and video.",
    },
    {
      question: "How do I connect the BT5.0 transmitter to my TV?",
      answer:
        "The BT5.0 transmitter can be connected to your TV using either the 3.5mm analog audio output or the optical digital audio output (if your TV has one). Simply plug the appropriate cable into your TV's audio output and the corresponding input on the transmitter, then pair your Bluetooth headphones or speakers with the transmitter.",
    },
    {
      question: "How long does the battery last?",
      answer:
        "The BT5.0 Bluetooth 5.0 Transmitter features a rechargeable battery that provides up to 20 hours of continuous use on a single charge. The actual battery life may vary depending on usage conditions and connected devices.",
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
          <Link href="/support" className="hover:text-primary">
            Support
          </Link>
          <span>/</span>
          <span>General FAQs</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">General FAQs</h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find answers to common questions about our Bluetooth 5.0 transmitter
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full mb-12">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="rounded-lg bg-muted p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="mb-4 text-muted-foreground">
          Our support team is here to help. Contact us for personalized assistance.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  )
}
