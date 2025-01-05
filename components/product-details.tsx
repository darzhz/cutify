'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '../data/products'
import { useCart } from '../context/cart-context'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { dispatch } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.options.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.options.colors[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity,
        selectedSize,
        selectedColor,
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Size</Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="mt-2 flex gap-2"
              >
                {product.options.sizes.map((size) => (
                  <Label
                    key={size}
                    className="flex cursor-pointer items-center rounded-md border p-2 [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
                  >
                    <RadioGroupItem value={size} className="sr-only" />
                    {size}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Color</Label>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="mt-2 flex gap-2"
              >
                {product.options.colors.map((color) => (
                  <Label
                    key={color}
                    className="flex cursor-pointer items-center rounded-md border p-2 [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
                  >
                    <RadioGroupItem value={color} className="sr-only" />
                    {color}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Quantity</Label>
              <Select
                value={quantity.toString()}
                onValueChange={(value) => setQuantity(parseInt(value))}
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleAddToCart} size="lg">
            Add to Cart
          </Button>

          <div className="prose mt-8">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <p>{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

