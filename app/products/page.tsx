export default function Products() {
  const categories = [
    {
      name: 'Cotton Fabrics',
      description: 'Premium cotton fabrics in various weaves and finishes',
      products: ['Plain Cotton', 'Canvas', 'Denim', 'Flannel']
    },
    {
      name: 'Silk Materials',
      description: 'Luxurious silk fabrics for high-end applications',
      products: ['Raw Silk', 'Satin', 'Chiffon', 'Taffeta']
    },
    {
      name: 'Polyester Blends',
      description: 'Durable and affordable synthetic blends',
      products: ['Poly-Cotton', 'Nylon Blend', 'Acrylic Mix', 'Spandex']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Product Catalog
        </h1>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">{category.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{category.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {category.products.map((product, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-full h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Product Image</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product}</h3>
                    <button className="text-amber-600 hover:text-amber-800 font-medium text-sm">
                      Inquiry →
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                  Bulk Order Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}