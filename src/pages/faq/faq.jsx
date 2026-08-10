import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Medantrik’s primary area of expertise?",
      answer:
        "Medantrik specializes in providing innovative medical and industrial solutions, focusing on high-quality equipment and reliable customer service."
    },
    {
      question: "How can I contact Medantrik’s customer support?",
      answer:
        "You can reach our support team via email at info@medantrik.in or by calling +91 8004116503. Support hours are Monday to Saturday, 9:00 AM to 6:00 PM (IST)."
    },
    {
      question: "What is the warranty period for Medantrik products?",
      answer:
        "All Medantrik products come with a standard one-year warranty covering manufacturing defects. You can also opt for an extended warranty by contacting our support team."
    },
    {
      question: "Can I return a product purchased from Medantrik?",
      answer:
        "Yes. Products may be returned within the terms outlined in our Return Policy. Items must be unused, in original packaging, and accompanied by proof of purchase. Please visit our Returns & Exchanges page for full details."
    },
    {
      question: "How long does it take to process a refund?",
      answer:
        "Refunds are typically processed within 10–15 business days after the returned product is received and inspected. Refunds are issued to the original payment method or as store credit."
    },
    {
      question: "Do you provide installation or setup assistance?",
      answer:
        "Yes, Medantrik provides installation guidance and remote technical assistance for eligible products. For on-site services, please contact our technical team."
    },
    {
      question: "Where can I find user manuals or product guides?",
      answer:
        "Product manuals and guides are available for download from the product pages on our official website or can be requested through customer support."
    },
  ]

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="pt-20 pb-16 px-6 md:px-20 lg:px-40 bg-orange-50 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Find answers to common questions about our products, services, and policies. If you can’t find what you’re looking for,
          contact our support team.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white border border-orange-200 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggle(index)
                    }
                  }}
                  className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <span className="text-lg font-semibold text-orange-600">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`px-5 pb-5 transition-all duration-200 ${isOpen ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Our support team is happy to help you with any additional queries.
          </p>
          <a
            href="mailto:info@medantrik.in"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors"
          >
            Contact Support
          </a>
        </div>

        <p className="text-center mt-12 text-gray-600 italic">
          Medantrik — Dedicated to Service & Quality.
        </p>
      </div>
    </div>
  )
}

export default Faq
