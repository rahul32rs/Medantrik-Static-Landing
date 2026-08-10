import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 pb-16 px-6 md:px-20 lg:px-40 bg-orange-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-6">
          <strong>Medantrik</strong> is committed to serving all potential and existing customers,
          which includes honoring their privacy in regards to information provided via this website.
        </p>

        <p className="mb-6">
          After receiving contact information, inquiries, orders or any other information,
          Medantrik uses this to help build strong relationships with customers.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">
          Use of Google Analytics and Cookies
        </h2>
        <p className="mb-6">
          This website uses Google Analytics, which collects anonymous visitor information through cookies.
          A cookie is a small data file that certain websites write to your hard drive when you visit them.
          The only personal information a cookie can contain is information you supply yourself.
          A cookie can’t read data off your hard disk or read cookie files created by other sites.
        </p>
        <p className="mb-6">
          In addition, the data saved by these cookies does not pertain to a specific individual.
          We do not store passwords or any personal information about you.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">
          Email and Contact Information
        </h2>
        <p className="mb-6">
          When voluntarily provided by visitors on this website, Medantrik may collect email addresses for promotional campaigns.
          When submitting a contact form via this website, the information provided by the visitor
          (including the visitor’s name, address, phone number and email) may be collected.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">
          Links to Third-Party Websites
        </h2>
        <p className="mb-6">
          The website contains links and references to third party websites. Medantrik is not responsible
          for the availability or the content of third party websites and is not liable for any damage or injury
          resulting from their use, regardless of purpose. Links to third party websites are provided
          to users of Medantrik’s website for their convenience only.
        </p>
        <p className="mb-6">
          If you choose to visit an advertiser by “clicking on” a banner ad or other type of advertisement,
          or click on another third-party link, you will be directed to that third party’s website.
          The fact that we link to a website or present an advertisement is not an endorsement,
          authorization or representation of our affiliation with that third party, nor is it an endorsement
          of their privacy or information security policies or practices.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">
          Sharing Your Information
        </h2>
        <p className="mb-6">
          At Medantrik, we appreciate your concerns about the security of your confidential online business transactions.
          Medantrik takes security measures to protect any information passed between our site and your computer
          during ordering sessions; however, Medantrik cannot guarantee that any electronic commerce is totally secure.
        </p>
        <p className="mb-6">
          To enable us to comply with your requests for information, you may be asked to supply personal data.
          Any such data is supplied by you completely voluntarily and is used solely for the purpose of complying
          with your request for information.
        </p>
        <p className="mb-6">
          The information we collect is used to improve the content and quality of our Service,
          and without your consent we will not otherwise sell, license or share your personal information
          to/with any other party for commercial purposes, except:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
          <li>To provide the Service</li>
          <li>When we have your permission</li>
          <li>
            As permitted or required by law (e.g., subpoenas, investigations, or prevention of unlawful activity)
          </li>
          <li>
            With third-party service providers that support our business operations
            (e.g., hosting, fulfillment, analytics, payment processing)
          </li>
        </ul>

        <p className="mb-6">
          When we do use an outside company, we use contractual or other appropriate means
          to ensure that personal information is used in a manner consistent with this Policy.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-orange-500">
          Conclusion
        </h2>
        <p className="mb-6">
          If you choose to visit <strong>medantrik.com</strong>, your visit and any dispute over privacy
          is subject to this Notice and our Terms and Conditions of Use, including limitations on damages,
          arbitration of disputes, and application of the law.
        </p>
        <p className="mb-6">
          This Notice and the Terms and Conditions of Use may change, and use of information that we gather now
          is subject to the Privacy Policy in effect at the time of use unless you are otherwise notified.
          We may email periodic reminders of our notices and conditions, but you should check our website frequently
          to see recent changes.
        </p>

        <p className="text-center mt-10 text-gray-600 italic">
          Last updated: November 2025
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
