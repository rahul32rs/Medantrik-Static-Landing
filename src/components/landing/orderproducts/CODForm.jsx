import { FiX, FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useState } from "react";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal"
];

export default function CODForm({ onClose, product }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successData, setSuccessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const payload = {
      product_name: product.title,
      product_price: String(product.price),
      full_name: data.name,
      email: data.email,
      mobile: data.phone,
      full_address: data.address,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
    };

    try {
      setLoading(true);
      const res = await fetch("https://medantrik.com/api/process_order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setSuccessData(result);
      } else {
        alert(result.errors.join("\n"));
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const input =
    "w-full rounded-xl border border-gray-300 bg-white " +
    "px-4 py-3 text-sm outline-none transition " +
    "focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

  const error = "text-xs text-red-500 mt-1";

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl shadow-xl max-h-[95vh] flex flex-col">

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">
            Cash on Delivery – {product.title}
          </h2>
          <button onClick={onClose}>
            <FiX className="text-xl text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* BODY */}
        {successData ? (
          /* ✅ SUCCESS SCREEN */
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Thank you for your order!
            </h2>

            <p className="mt-2 text-gray-600">
              Your order has been placed successfully.
            </p>

            <p className="mt-1 text-sm text-gray-500">
              📧 Please check your email — you will receive the order confirmation shortly.
            </p>

            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-white font-semibold shadow hover:bg-orange-600 active:scale-95"
            >
              Close
            </button>
          </div>
        ) : (
          /* 📝 FORM */
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
            >
              <Field label="Full Name" icon={<FiUser />}>
                <input
                  className={input}
                  placeholder="Your full name"
                  {...register("name", { required: "Name required" })}
                />
                {errors.name && <p className={error}>{errors.name.message}</p>}
              </Field>

              <Field label="Email" icon={<FiMail />}>
                <input
                  type="email"
                  className={input}
                  placeholder="name@example.com"
                  {...register("email", { required: "Email required" })}
                />
                {errors.email && <p className={error}>{errors.email.message}</p>}
              </Field>

              <Field label="Mobile Number" icon={<FiPhone />}>
                <input
                  className={input}
                  placeholder="10 digit mobile number"
                  {...register("phone", {
                    required: "Mobile number required",
                    pattern: { value: /^[6-9]\d{9}$/, message: "Invalid number" },
                  })}
                />
                {errors.phone && <p className={error}>{errors.phone.message}</p>}
              </Field>

              <Field label="Full Address" icon={<FiMapPin />}>
                <textarea
                  rows={3}
                  className={input}
                  placeholder="House no, street, area"
                  {...register("address", { required: "Address required" })}
                />
                {errors.address && <p className={error}>{errors.address.message}</p>}
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="City">
                  <input
                    className={input}
                    placeholder="City"
                    {...register("city", { required: "City required" })}
                  />
                  {errors.city && <p className={error}>{errors.city.message}</p>}
                </Field>

                <Field label="State">
                  <select
                    className={`${input} bg-white`}
                    {...register("state", { required: "State required" })}
                  >
                    <option value="">Select state</option>
                    {STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <p className={error}>{errors.state.message}</p>}
                </Field>
              </div>

              <Field label="Pincode">
                <input
                  className={input}
                  placeholder="6 digit pincode"
                  {...register("pincode", {
                    required: "Pincode required",
                    pattern: { value: /^[1-9][0-9]{5}$/, message: "Invalid pincode" },
                  })}
                />
                {errors.pincode && <p className={error}>{errors.pincode.message}</p>}
              </Field>
            </form>

            {/* FOOTER */}
            <div className="sticky bottom-0 bg-white border-t px-5 py-4 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit(onSubmit)}
                className="rounded-xl bg-orange-500 px-6 py-3 text-white font-semibold shadow hover:bg-orange-600 active:scale-95 disabled:opacity-50"
              >
                {loading ? "Placing Order..." : `Place Order (₹${product.price})`}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, icon, children }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        {icon && <span className="text-gray-400">{icon}</span>}
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
