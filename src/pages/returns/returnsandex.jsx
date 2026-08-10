import React from 'react'

const ReturnsAndExchanges = () => {
  return (
    <div className="pt-20 pb-16 px-6 md:px-20 lg:px-40 bg-orange-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">
          Returns & Exchanges
        </h1>

        <p className="mb-6">
          In the event of any hardware damage or if the warranty sticker is found to be tampered with,
          the warranty or repair becomes void. In such cases, the installed product will be replaced,
          but <strong>Medantrik</strong> will not be liable for any damage incurred due to prior use of the product.
        </p>

        <p className="mb-6">
          The product must be returned in its original packaging with all accessories included.
          Proof of purchase, such as the original receipt or order confirmation, is required for all returns.
          Medantrik reserves the right to assess the condition of the returned product before processing
          a refund or replacement.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Return Authorization</h2>
        <p className="mb-6">
          Customers must obtain a <strong>Return Authorization (RA)</strong> from Medantrik before returning any product.
          Proof of purchase, such as the original receipt or order confirmation, is mandatory for all returns.
          This ensures that the return is properly documented and facilitates a smoother process.
          Products must be returned in their original packaging with all included accessories.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Inspection Period</h2>
        <p className="mb-6">
          Upon receiving the returned product, Medantrik reserves the right to conduct a thorough inspection
          to verify the condition of the item before processing any refund or replacement.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Refund Processing Time</h2>
        <p className="mb-6">
          Refunds, when applicable, will be processed within <strong>10–15 business days</strong> from the date
          the returned product is received and inspected. Refunds will be issued in the original form of payment
          used for the purchase. If the original payment method is unavailable, Medantrik may issue a store credit.
        </p>
        <p className="mb-6">
          Customers are responsible for any shipping expenses related to returning the product,
          except in cases where the return is due to an error on Medantrik’s part or a defective product.
          Medantrik reserves the right to evaluate the product’s condition before approving a refund or replacement.
        </p>
        <p className="mb-6">
          This return policy does not apply to products purchased through unauthorized dealers or third-party platforms.
          Returns for such purchases should be handled directly with the respective seller.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Damaged Shipment</h2>
        <p className="mb-6">
          If a product is received in a damaged condition, customers must notify Medantrik within
          <strong> 2 days </strong> of receipt and provide supporting documentation (such as photos or a delivery note).
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Cancellations Protocol</h2>
        <p className="mb-6">
          Orders may be cancelled within <strong>48 hours</strong> of placement. After this period,
          cancellations are subject to Medantrik’s discretion and may incur restocking fees.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Product Usage Guidelines</h2>
        <p className="mb-6">
          Customers are advised to follow the product-care guidelines provided by Medantrik to ensure warranty validity
          and to maintain product longevity.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Extended Warranty Option</h2>
        <p className="mb-6">
          If you wish to extend your warranty beyond the standard one-year period,
          our dedicated customer support team is available to assist with your queries and concerns.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">Contact Us</h2>
        <p className="mb-2">
          <strong>Email:</strong>{' '}
          <a
            href="mailto:info@medantrik.in"
            className="text-orange-600 underline hover:text-orange-700"
          >
            info@medantrik.in
          </a>
        </p>
        <p className="mb-6">
          <strong>Phone:</strong>{' '}
          <a
            href="tel:+918004116503"
            className="text-orange-600 underline hover:text-orange-700"
          >
            +91 8004116503
          </a>
        </p>

        <p className="mb-6">
          At <strong>Medantrik</strong>, we are committed to providing quality service and value your satisfaction.
          If you have any questions or require further clarification about our return policy,
          please don’t hesitate to reach out.
        </p>

        <p className="text-center mt-10 text-gray-600 italic">
          Last updated: November 2025
        </p>
      </div>
    </div>
  )
}

export default ReturnsAndExchanges
