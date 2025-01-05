import { Metadata } from 'next'
import { getProducts, Product } from '../../../data/products'
import { ProductDetails } from '../../../components/product-details'

type Params = {
  id: string
}

export async function generateStaticParams(): Promise<Params[]> {
  const products = getProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const product = getProducts().find(async p => p.id === (await params)?.id)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

// ProductPage component expects params to be awaited properly
type ProductPageProps = {
  params: Promise<Params>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const products =  getProducts()
  const product = products.find(async p => p.id ===  (await params)?.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetails product={product} />
}
