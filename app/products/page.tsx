export default function Products() {
  const categories = [
    {
      name: 'Cotton Fabrics',
      description: 'Premium cotton fabrics in various weaves and finishes',
      products: ['Plain Cotton', 'Canvas', 'Denim', 'Flannel'],
      icon: '🧵',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      name: 'Silk Materials',
      description: 'Luxurious silk fabrics for high-end applications',
      products: ['Raw Silk', 'Satin', 'Chiffon', 'Taffeta'],
      icon: '🕸️',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      name: 'Linen Textiles',
      description: 'Natural linen for breathable and elegant designs',
      products: ['Pure Linen', 'Linen-Cotton', 'Colored Linen', 'Textured Linen'],
      icon: '🌾',
      gradient: 'from-orange-400 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-amber-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-40 animate-bounce animation-delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700 mb-4 animate-fade-in">
          Our Product Catalog
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg animate-fade-in-up animation-delay-300">
          Discover our premium collection of textiles, crafted with excellence and care
        </p>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${categoryIndex * 200}ms`}}>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h2 className="text-3xl font-semibold text-amber-800">{category.name}</h2>
                  <p className="text-lg text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${(categoryIndex * 200) + (productIndex * 100) + 400}ms`}}>
                    <div className={`w-full h-32 bg-gradient-to-br ${category.gradient} rounded-lg mb-4 flex items-center justify-center shadow-lg animate-pulse`}>
                      <span className="text-white font-bold text-sm text-center px-2">{product}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-center">{product}</h3>
                    <div className="text-center">
                      <button className="text-amber-600 hover:text-amber-800 font-medium text-sm transition-colors duration-300 hover:underline transform hover:scale-105">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center animate-fade-in-up animation-delay-1000">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Bulk Order {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl shadow-xl text-center animate-fade-in-up animation-delay-1500">
          <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
          <p className="text-lg mb-6 opacity-90">
            We specialize in custom fabric development tailored to your specific requirements
          </p>
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  )
}