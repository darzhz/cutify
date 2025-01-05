import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../data/products'

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-transform hover:scale-105"
        >
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-sm truncate">{product.name}</h3>
            <p className="font-medium text-sm mt-1">${product.price.toFixed(2)}</p>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

