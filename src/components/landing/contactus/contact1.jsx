import React, { useState } from 'react';
import { sendContactMessage } from "../../../api/contact.api";
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';
// import { submitContactForm } from '../../services/operation2/contactOper';
// import { toast } from 'react-hot-toast';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await sendContactMessage(formData);

      console.log("CONTACT API RESPONSE:", res);

      if (res?.status !== true && res?.success !== true) {
        throw new Error(res?.message || "Message not sent");
      }

      alert("Message sent successfully!");

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error("CONTACT API ERROR:", err);
      alert(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="bg-white py-24 px-10 md:px-34 min-h-screen font-sans">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in Touch with <span className="text-[#0b133c]">Medantrik</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Have questions about our healthcare solutions or need support with our devices?
            Our team is here to assist you with product demos, collaborations, or technical guidance.
            Let’s build a healthier tomorrow together.
          </p>
        </div>

        {/* Contact Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Section */}
          <div className="bg-orange-500 text-white p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MdEmail size={20} /> Email Us
                </h3>
                <p className="text-sm mt-1">
                  General Inquiries: <br />
                  <a href="mailto:info@medantrik.in" className="hover:underline">
                    info@medantrik.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MdLocationOn size={20} /> Our Office
                </h3>
                <p className="text-sm mt-1">
                  Medantrik Medtech Pvt. Ltd. <br />
                  D-25, Sector 63A, Noida <br />
                  Uttar Pradesh, India, 201309
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MdAccessTime size={20} /> Work Hours
                </h3>
                <p className="text-sm mt-1">
                  Monday – Saturday: 9:00 AM – 5:00 PM (IST) <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right Section — Contact Form */}
          <div className="bg-white p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-[#0b133c] text-sm py-2"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-[#0b133c] text-sm py-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-[#0b133c] text-sm py-2"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-[#0b133c] text-sm py-2 resize-none h-24"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#0b133c] text-white px-6 py-3 rounded-lg hover:bg-[#121b4a] transition duration-300 text-sm font-medium cursor-pointer"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <h3 className="text-lg font-medium text-gray-700">
            Let's advance healthcare together — powered by <br />
            <span className="text-[#0b133c] font-semibold">
              AI, innovation, and compassion.
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Contact1;
