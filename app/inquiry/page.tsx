'use client'

import { useState } from 'react'

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '',
    fabricType: '',
    customNotes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // For demo purposes, logging to console
      // In production, integrate with Google Forms or your preferred form service
      console.log('Bulk order inquiry:', formData)

      alert('Bulk order inquiry submitted successfully! Our team will contact you soon.')
      setFormData({ name: '', phone: '', email: '', quantity: '', fabricType: '', customNotes: '' })
    } catch (error) {
      alert('Error submitting inquiry. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          Bulk Order Inquiry
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity (meters) *
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="fabricType" className="block text-sm font-medium text-gray-700 mb-2">
                  Fabric Type *
                </label>
                <select
                  id="fabricType"
                  name="fabricType"
                  required
                  value={formData.fabricType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select fabric type</option>
                  <option value="cotton">Cotton</option>
                  <option value="silk">Silk</option>
                  <option value="polyester">Polyester</option>
                  <option value="blend">Blend</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="customNotes" className="block text-sm font-medium text-gray-700 mb-2">
                Custom Notes
              </label>
              <textarea
                id="customNotes"
                name="customNotes"
                rows={4}
                value={formData.customNotes}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Any specific requirements, colors, patterns, etc..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Submit Bulk Order Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}