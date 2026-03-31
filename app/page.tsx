import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-200/30 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700 mb-6 animate-fade-in">
            Premium Textile Solutions
            <span className="block text-amber-900 animate-fade-in-up animation-delay-300">for Every Need</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            Leading supplier of high-quality textiles for retail and bulk buyers worldwide.
            From cotton to silk, we deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-700">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce">
              Explore Products
            </button>
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-50 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-50 animate-bounce animation-delay-1500"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
            Our Textile Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Cotton Fabrics', desc: 'Soft, durable, and versatile', img: '/placeholder-cotton.jpg', color: 'from-amber-400 to-orange-500' },
              { name: 'Silk Materials', desc: 'Luxurious and elegant', img: '/placeholder-silk.jpg', color: 'from-yellow-400 to-amber-500' },
              { name: 'Linen Textiles', desc: 'Natural and breathable', img: '/placeholder-linen.jpg', color: 'from-orange-400 to-red-500' },
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`w-full h-48 bg-gradient-to-br ${category.color} rounded-lg mb-4 flex items-center justify-center shadow-lg animate-pulse`}>
                  <span className="text-white font-bold text-lg">{category.name}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.desc}</p>
                <button className="text-amber-600 hover:text-amber-800 font-medium transition-colors duration-300 hover:underline">
                  View Products →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">10+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">500+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">1000+</div>
              <div className="text-xl">Products Delivered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}