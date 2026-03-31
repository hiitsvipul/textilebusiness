export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce animation-delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700 mb-12 animate-fade-in">
          About Our Textile Business
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-amber-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded in 2014, we have been at the forefront of the textile industry, providing
              high-quality fabrics to businesses and individuals worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our commitment to excellence, innovation, and customer satisfaction has made us
              a trusted partner for textile solutions.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-l-4 border-amber-500">
              <p className="text-amber-800 font-medium italic">
                &ldquo;Quality fabrics that tell your story, crafted with care and precision.&rdquo;
              </p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6 flex items-center">
              <span className="mr-3">🏭</span>
              Manufacturing Capability
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center hover:text-amber-700 transition-colors duration-300">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                State-of-the-art weaving facilities
              </li>
              <li className="flex items-center hover:text-amber-700 transition-colors duration-300">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                Quality control at every stage
              </li>
              <li className="flex items-center hover:text-amber-700 transition-colors duration-300">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                Sustainable production practices
              </li>
              <li className="flex items-center hover:text-amber-700 transition-colors duration-300">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                Custom fabric development
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl animate-fade-in-up animation-delay-500">
          <h2 className="text-3xl font-semibold text-center text-amber-800 mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-700">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">ISO 9001</div>
              <div className="text-gray-600 font-medium">Quality Management</div>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-900">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">GOTS</div>
              <div className="text-gray-600 font-medium">Organic Textile Standard</div>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-1100">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">OEKO-TEX</div>
              <div className="text-gray-600 font-medium">Textile Safety</div>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 animate-fade-in-up animation-delay-1300">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}