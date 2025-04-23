"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getPath } from "@/lib/utils-path"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: getPath("/") },
    { name: "Products", path: getPath("/product") },
    { name: "About Us", path: getPath("/about") },
    { name: "Contact Us", path: getPath("/contact") },
    {
      name: "Support",
      path: getPath("/support"),
      children: [
        { name: "General FAQs", path: getPath("/support/general") },
        { name: "Shipping FAQs", path: getPath("/support/shipping") },
      ],
    },
  ]

  const toggleMobileSubmenu = (name: string) => {
    if (openMobileSubmenu === name) {
      setOpenMobileSubmenu(null)
    } else {
      setOpenMobileSubmenu(name)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={getPath("/")} className="flex items-center space-x-2">
          <span className="text-xl font-bold">BT5.0</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) =>
            route.children ? (
              <DropdownMenu key={route.path}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  {route.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {route.children.map((child) => (
                    <DropdownMenuItem key={child.path} asChild>
                      <Link href={child.path} className={`w-full ${pathname === child.path ? "text-primary" : ""}`}>
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 grid gap-4">
            {routes.map((route) => (
              <div key={route.path}>
                {route.children ? (
                  <>
                    <div
                      className="flex items-center justify-between text-sm font-medium"
                      onClick={() => toggleMobileSubmenu(route.name)}
                    >
                      <span>{route.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileSubmenu === route.name ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openMobileSubmenu === route.name && (
                      <div className="ml-4 mt-2 grid gap-2">
                        {route.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={`text-sm transition-colors hover:text-primary ${
                              pathname === child.path ? "text-primary" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={route.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === route.path ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
