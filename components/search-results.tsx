"use client"
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Product } from '../data/products'
import { ProductGrid } from './product-grid'
import { Input } from '@/components/ui/input'

export function SearchResults({ initialProducts }: { initialProducts: Product[] }) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  useEffect(() => {
    filterProducts(initialProducts, query)
  }, [initialProducts, query])

  const filterProducts = (products: Product[], query: string) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    filterProducts(initialProducts, newQuery)
  }

  return (
    <>
      <Input 
        type="search" 
        placeholder="Search products..." 
        className="w-full max-w-md mb-8"
        defaultValue={query}
        onChange={handleSearch}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid products={filteredProducts} />
      </Suspense>
    </>
  )
}
