import React, { useEffect, useRef, useState } from "react";
import { applyJob } from "../../../api/career.api";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeartbeat, FaMicroscope, FaLaptopCode, FaUsers, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// Polished single-file React + Tailwind component
// - improved layout, spacing, colors, accessible labels
// - nicer drag & drop with preview + icons
// - clear validation states and subtle micro-interactions
// - default export component ready to paste into a project

export default function CareerOnePolished() {
  const roles = [
    "Clinical R&D Scientist",
    "Frontend Engineer",
    "Product Manager",
    "Customer Success Lead",
  ];

  const [form, setForm] = useState({ name: "", email: "", role: "", location: "", cover: "" });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!submitting) setProgress(0);
  }, [submitting]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.role.trim()) e.role = "Choose a role";
    if (file && file.size > 5 * 1024 * 1024) e.file = "File must be under 5 MB";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleFilePick(f) {
    if (!f) return setFile(null);
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(f.type)) {
      setErrors((s) => ({ ...s, file: "Only PDF / DOC / DOCX allowed" }));
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setErrors((s) => ({ ...s, file: "File must be under 5 MB" }));
      return;
    }
    setFile(f);
    setErrors((s) => ({ ...s, file: undefined }));
  }

  function handleFile(e) {
    const f = e.target.files && e.target.files[0];
    handleFilePick(f);
  }

  function handleDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFilePick(f);
  }

  async function handleSubmit(ev) {
  ev.preventDefault();

  const e = validate();
  setErrors(e);
  if (Object.keys(e).length) return;

  setSubmitting(true);
  setSuccess(false);
  setProgress(0);

  try {
    const formData = new FormData();
    formData.append("full_name", form.name);
    formData.append("email", form.email);
    formData.append("role", form.role);
    formData.append("location", form.location);
    formData.append("cover_letter", form.cover);
    if (file) formData.append("resume", file);

    await applyJob(formData, (percent) => {
      setProgress(percent);
    });

    setSuccess(true);
    setForm({ name: "", email: "", role: "", location: "", cover: "" });
    setFile(null);
    setErrors({});
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
    setTimeout(() => setSuccess(false), 6000);
  }
}

  return (
    <div id="career" className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <main className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column — Hero / Info */}
        {/* Left column — Hero / Info */}
<aside className="lg:col-span-1 bg-gradient-to-br from-white to-orange-50 rounded-3xl p-7 shadow-xl border border-orange-100">
  
  {/* Header */}
  <div className="flex items-start gap-4">
    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shadow-sm">
      <FaHeartbeat size={28} />
    </div>
    <div>
      <h2 className="text-xl font-bold text-orange-600">Careers at Medantrik</h2>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
        We design and build clinical-grade software and devices focused on improving respiratory health and patient outcomes.
      </p>
    </div>
  </div>

  {/* Points */}
  <ul className="mt-6 space-y-4 text-sm text-gray-700">
    <li className="flex items-start gap-3">
      <FaMicroscope className="text-orange-500 mt-0.5" />
      <span>Work on real healthcare problems with measurable clinical impact</span>
    </li>
    <li className="flex items-start gap-3">
      <FaLaptopCode className="text-orange-500 mt-0.5" />
      <span>Build scalable products used by hospitals and wellness centers</span>
    </li>
    <li className="flex items-start gap-3">
      <FaUsers className="text-orange-500 mt-0.5" />
      <span>Collaborate with doctors, engineers, and product specialists</span>
    </li>
    <li className="flex items-start gap-3">
      <FaMapMarkerAlt className="text-orange-500 mt-0.5" />
      <span>Remote-friendly and hybrid work culture</span>
    </li>
  </ul>

  {/* Hiring areas */}
  <div className="mt-7">
    <h4 className="text-sm font-semibold text-gray-700">Current Hiring Areas</h4>
    <div className="mt-3 flex flex-wrap gap-2">
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Clinical R&amp;D</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Biomedical Engineering</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Medical Devices</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Digital Health</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">AI in Healthcare</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Regulatory &amp; Compliance</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Product</span>
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Customer Success</span>
</div>

  </div>

  {/* Footer note */}
  <div className="mt-7 flex items-start gap-2 text-xs text-gray-500">
    <FaClock className="mt-0.5 text-orange-400" />
    <span>
      Our team usually reviews applications within <strong>7 business days</strong>.  
      Please upload a resume under <strong>5 MB</strong>.
    </span>
  </div>
</aside>

        {/* Right column — Form card */}
<section id="apply" className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-50">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-2xl font-bold text-gray-800">Apply for a role</h3>
    </div>

    <div className="text-right text-sm text-gray-500">
      <div className="font-medium">Medantrik</div>
    </div>
  </div>

  <form onSubmit={handleSubmit} className="mt-6 space-y-6">

    {/* Name + Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label className="flex flex-col">
        <span className="text-sm text-gray-700">Full name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-200 ${
            errors.name ? "border-red-300" : "border-gray-200"
          }`}
        />
        {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-gray-700">Email address</span>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`mt-2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-200 ${
            errors.email ? "border-red-300" : "border-gray-200"
          }`}
        />
        {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
      </label>
    </div>

    {/* Role + Location */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Role */}
      <label className="flex flex-col md:col-span-2">
        <span className="text-sm text-gray-700">Role applying for</span>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className={`mt-2 px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 ${
            errors.role ? "border-red-300" : "border-gray-200"
          }`}
        >
          <option value="">Select a role</option>

          <optgroup label="Engineering">
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Embedded Systems Engineer">Embedded Systems Engineer</option>
          </optgroup>

          <optgroup label="Clinical & MedTech">
            <option value="Clinical R&D Scientist">Clinical R&amp;D Scientist</option>
            <option value="Biomedical Engineer">Biomedical Engineer</option>
            <option value="Medical Device Specialist">Medical Device Specialist</option>
            <option value="Healthcare Data Analyst">Healthcare Data Analyst</option>
            <option value="Regulatory Affairs Executive">Regulatory Affairs Executive</option>
          </optgroup>

          <optgroup label="Product & Business">
            <option value="Product Manager">Product Manager</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Customer Success Lead">Customer Success Lead</option>
            <option value="Sales & Partnerships">Sales & Partnerships</option>
          </optgroup>

          <option value="Other">Other (Write your role)</option>
        </select>
        {errors.role && <span className="text-red-500 text-sm mt-1">{errors.role}</span>}
      </label>

      {/* Location */}
      <label className="flex flex-col">
        <span className="text-sm text-gray-700">Location</span>
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="City, Country or Remote"
          className="mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-100"
        />
      </label>
    </div>

    {/* Custom Role */}
    {form.role === "Other" && (
      <label className="flex flex-col">
        <span className="text-sm text-gray-700">Your role</span>
        <input
          name="customRole"
          value={form.customRole || ""}
          onChange={handleChange}
          placeholder="Enter your role (eg. AI Engineer, Lab Technician)"
          className="mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />
      </label>
    )}

    {/* Cover Letter */}
    <label className="flex flex-col">
      <span className="text-sm text-gray-700">Cover letter</span>
      <textarea
        name="cover"
        value={form.cover}
        onChange={handleChange}
        rows={5}
        placeholder="Briefly explain why you want to join Medantrik"
        className="mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-100 resize-none"
      />
    </label>

    {/* Submit */}
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={submitting}
        className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </div>

  </form>
</section>

      </main>
    </div>
  );
}
