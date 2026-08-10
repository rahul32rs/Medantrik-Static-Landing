import React from 'react'
import { Mail, Phone, MessageCircle, Wrench, HelpCircle } from 'lucide-react'

const Support = () => {
  return (
    <div className="pt-20 pb-16 px-6 md:px-20 lg:px-40 bg-orange-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
          Customer Support
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          We’re here to help! Whether you need technical assistance, product guidance, or warranty support — 
          the Medantrik team is ready to assist you every step of the way.
        </p>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Support */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Wrench className="text-orange-500 mr-3" size={28} />
              <h2 className="text-xl font-semibold text-orange-600">Technical Support</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Facing an issue with your Medantrik product? Our support engineers can help you troubleshoot 
              and resolve hardware or software-related concerns quickly and efficiently.
            </p>
            <a 
              href="mailto:support@medantrik.in"
              className="text-orange-600 font-medium hover:underline"
            >
              support@medantrik.in
            </a>
          </div>

          {/* Warranty & Repairs */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-orange-500 mr-3" size={28} />
              <h2 className="text-xl font-semibold text-orange-600">Warranty & Repairs</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Need to claim a warranty or repair service? Reach out to our dedicated service team 
              to initiate your claim or schedule a service appointment.
            </p>
            <a 
              href="mailto:warranty@medantrik.in"
              className="text-orange-600 font-medium hover:underline"
            >
              warranty@medantrik.in
            </a>
          </div>

          {/* FAQs */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <HelpCircle className="text-orange-500 mr-3" size={28} />
              <h2 className="text-xl font-semibold text-orange-600">FAQs & Self Help</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Explore our frequently asked questions to find quick answers about product setup, 
              installation, and troubleshooting.
            </p>
            <a 
              href="/faq"
              className="text-orange-600 font-medium hover:underline"
            >
              Visit FAQs →
            </a>
          </div>

          {/* Feedback */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-orange-500 mr-3" size={28} />
              <h2 className="text-xl font-semibold text-orange-600">Feedback & Suggestions</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We value your feedback! Help us improve by sharing your experience with our products 
              and services. Every suggestion makes us better.
            </p>
            <a 
              href="mailto:feedback@medantrik.in"
              className="text-orange-600 font-medium hover:underline"
            >
              feedback@medantrik.in
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Need Immediate Help?</h2>
          <p className="text-gray-700 mb-6">
            Our support team is available Monday–Saturday, 9:00 AM to 6:00 PM (IST).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700">
            <div className="flex items-center justify-center">
              <Mail className="text-orange-500 mr-2" size={20} />
              <a href="mailto:info@medantrik.in" className="hover:text-orange-600 font-medium">
                info@medantrik.in
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="text-orange-500 mr-2" size={20} />
              <a href="tel:+918004116503" className="hover:text-orange-600 font-medium">
                +91 8004116503
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-12 text-gray-600 italic">
          Medantrik — Committed to Your Satisfaction.
        </p>
      </div>
    </div>
  )
}

export default Support
