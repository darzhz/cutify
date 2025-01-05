import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold font-['Instrument_Sans']">About Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Cutify.spaces is your destination for adorable home decor and art pieces that bring joy and charm to any space.
            </p>
            <h3 className="text-lg font-semibold font-['Instrument_Sans'] mt-6">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates and exclusive offers!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-['Instrument_Sans']">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-muted-foreground hover:text-foreground">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-['Instrument_Sans']">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} cutify.spaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

