import { Instrument_Sans } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { CartProvider } from '../context/cart-context'
import '../styles/globals.css'


const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSans.className}>
      <body>
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

