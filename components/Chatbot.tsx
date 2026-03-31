'use client'

import { useState } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: 'Hello! How can I help you today?', isUser: false }
  ])
  const [leadData, setLeadData] = useState({ name: '', phone: '' })
  const [collectingLead, setCollectingLead] = useState(false)
  const [input, setInput] = useState('')

  const predefinedPrompts = [
    'Show products',
    'Bulk order inquiry',
    'Talk to sales'
  ]

  const handleSend = (message: string) => {
    if (!message.trim()) return

    setMessages(prev => [...prev, { text: message, isUser: true }])

    if (collectingLead) {
      if (!leadData.name) {
        setLeadData({ ...leadData, name: message })
        setMessages(prev => [...prev, { text: 'Great! Now please provide your phone number.', isUser: false }])
      } else if (!leadData.phone) {
        setLeadData({ ...leadData, phone: message })
        // For demo purposes, just log the data
        console.log('Chatbot lead:', {
          name: leadData.name,
          phone: message,
          source: 'Chatbot'
        })
        setMessages(prev => [...prev, { text: 'Thank you! Our sales team will contact you soon.', isUser: false }])
        setCollectingLead(false)
        setLeadData({ name: '', phone: '' })
      }
      setInput('')
      return
    }

    // Simple responses
    let response = 'Thank you for your message. Our sales team will contact you soon.'
    if (message.toLowerCase().includes('products')) {
      response = 'Check out our Products page for our full catalog!'
    } else if (message.toLowerCase().includes('bulk') || message.toLowerCase().includes('sales')) {
      response = 'I can help you with that. Please provide your name first.'
      setCollectingLead(true)
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }])
    }, 1000)

    setInput('')
  }

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-w-[calc(100vw-3rem)] h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col animate-fade-in-up">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-t-lg flex-shrink-0">
            <h3 className="font-semibold">Textile Assistant</h3>
          </div>

          <div className="flex-1 p-4 overflow-y-auto min-h-0">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'} animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
                <div className={`inline-block p-3 rounded-lg max-w-[calc(100%-2rem)] shadow-sm ${
                  msg.isUser ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Predefined Prompts */}
          <div className="p-2 border-t flex-shrink-0">
            <div className="flex flex-wrap gap-1 mb-2">
              {predefinedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(prompt)}
                  className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 px-2 py-1 rounded-full transition-colors duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t flex-shrink-0">
            <div className="flex gap-2 items-end">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Type your message..."
                className="flex-1 min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
              <button
                onClick={() => handleSend(input)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-105 flex-shrink-0"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}