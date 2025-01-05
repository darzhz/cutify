import { getProducts } from '../../data/products'
import { SearchResults } from '../../components/search-results'
import { Suspense } from 'react'

export default function SearchPage() {
  const products = getProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>
      <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults initialProducts={products} />
      </Suspense>
    </div>
  )
}

