import Link from "next/link"
import { getPath } from "@/lib/utils-path"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">BT5.0</h3>
            <p className="text-sm text-muted-foreground">
              Premium Bluetooth 5.0 transmitter for seamless audio streaming.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getPath("/product")} className="text-muted-foreground hover:text-foreground">
                  Bluetooth Transmitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getPath("/support/general")} className="text-muted-foreground hover:text-foreground">
                  General FAQs
                </Link>
              </li>
              <li>
                <Link href={getPath("/support/shipping")} className="text-muted-foreground hover:text-foreground">
                  Shipping FAQs
                </Link>
              </li>
              <li>
                <Link href={getPath("/contact")} className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 4/22/2025 Isaac Etokhana. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
