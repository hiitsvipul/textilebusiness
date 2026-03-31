import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 hover:scale-105 transition-transform duration-300">
              TextileCo
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:scale-105 transform">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:scale-105 transform">
              About
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:scale-105 transform">
              Products
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:scale-105 transform">
              Contact
            </Link>
            <Link href="/inquiry" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Bulk Order
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}