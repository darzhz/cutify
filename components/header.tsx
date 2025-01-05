'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Search } from './search'
import { useCart } from '../context/cart-context'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Header() {
  const { state } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary font-['Instrument_Sans']">cutify.spaces</span>
        </Link>

        <div className="flex-1 flex items-center justify-center">
          <Search />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {state.items.length > 0 && (
                <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-8rem)] py-4">
              {state.items.length === 0 ? (
                <p className="text-center text-muted-foreground">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-4">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.selectedSize} - {item.selectedColor}
                        </p>
                        <p className="text-sm">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <p className="font-medium">Total</p>
                      <p className="font-medium">${state.total.toFixed(2)}</p>
                    </div>
                    <Button className="w-full mt-4">Checkout</Button>
                  </div>
                </div>
              )}
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

