import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ShippingFAQPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping within the United States typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping times vary by destination, generally taking 7-14 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any import duties, taxes, or customs fees that may apply.",
    },
    {
      question: "Is free shipping available?",
      answer:
        "Yes, we offer free standard shipping on all orders over $35 within the United States. International orders and expedited shipping options are available at an additional cost.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive a shipping confirmation email with a tracking number. You can use this tracking number on our website or the carrier's website to track the status of your delivery.",
    },
    {
      question: "What if my package is lost or damaged?",
      answer:
        "If your package is lost during shipping or arrives damaged, please contact our customer support team within 7 days of the expected delivery date. We will work with the shipping carrier to resolve the issue and arrange for a replacement if necessary.",
    },
    {
      question: "Can I change my shipping address after placing an order?",
      answer:
        "We can only change the shipping address if the order has not yet been processed. Please contact our customer support team as soon as possible if you need to update your shipping information. Once an order has been shipped, we cannot change the delivery address.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Items must be in their original condition with all packaging and accessories. Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product.",
    },
    {
      question: "How do I return a product?",
      answer:
        "To initiate a return, please contact our customer support team to obtain a Return Merchandise Authorization (RMA) number. Products returned without an RMA number may not be eligible for a refund. Once you have an RMA number, package the item securely with all original packaging and accessories, and ship it to the address provided by our support team.",
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
          <span>Shipping FAQs</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shipping & Returns FAQs</h1>
        <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find answers to common questions about shipping, delivery, and returns
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
        <h3 className="text-xl font-bold mb-2">Need more information?</h3>
        <p className="mb-4 text-muted-foreground">
          Our support team is ready to assist with any shipping or return questions.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  )
}
