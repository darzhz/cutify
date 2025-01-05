import { getProducts } from '../data/products'
import { ProductGrid } from '../components/product-grid'

export default function Home() {
  const products = getProducts()

  return (
    <main className="flex-1">
      <section className="px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-['Instrument_Sans']">
            Cutify Your Space
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
            Discover our collection of adorable decor pieces and art that will transform your space into a cute and cozy haven.
          </p>
        </div>
      </section>
      <div className="container mx-auto">
        <ProductGrid products={products} />
      </div>
    </main>
  )
}

