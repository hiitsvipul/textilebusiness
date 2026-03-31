export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          About Our Textile Business
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2014, we have been at the forefront of the textile industry, providing
              high-quality fabrics to businesses and individuals worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our commitment to excellence, innovation, and customer satisfaction has made us
              a trusted partner for textile solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Manufacturing Capability</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• State-of-the-art weaving facilities</li>
              <li>• Quality control at every stage</li>
              <li>• Sustainable production practices</li>
              <li>• Custom fabric development</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">ISO 9001</div>
              <div className="text-gray-600">Quality Management</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">GOTS</div>
              <div className="text-gray-600">Organic Textile Standard</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">OEKO-TEX</div>
              <div className="text-gray-600">Textile Safety</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}