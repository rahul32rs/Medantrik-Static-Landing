import { useParams } from "react-router-dom";
import { useState } from "react";
import PRODUCTS_DETAILS from "../../data/products.details";
import BuyOptions from "../../components/landing/orderproducts/BuyOptions";
import {
  FiCheckCircle,
  FiXCircle,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiTool,
} from "react-icons/fi";

export default function OrderProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS_DETAILS[slug];

  const [activeImage, setActiveImage] = useState(
    product?.images?.[0]
  );

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* IMAGE SECTION */}
          <div>
            <div className="relative rounded-3xl bg-orange-50 p-6 sm:p-8">
              <img
                src={activeImage}
                alt={product.title}
                className="
                  w-full max-w-sm sm:max-w-md mx-auto
                  object-contain
                  drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                "
              />
            </div>

            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="mt-4 flex gap-3 justify-center flex-wrap">
                {product.images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`
                      rounded-xl border p-2 transition
                      ${
                        activeImage === img
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }
                    `}
                  >
                    <img src={img} alt="" className="h-14 object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <p className="text-gray-500 mt-2">{product.subtitle}</p>

            {/* Availability */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium">
              {product.availability === "in_stock" ? (
                <span className="flex items-center gap-2 text-green-600">
                  <FiCheckCircle /> In Stock
                </span>
              ) : (
                <span className="flex items-center gap-2 text-red-500">
                  <FiXCircle /> Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-6 leading-relaxed">
              {product.shortDesc}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.longDesc}
            </p>

            {/* PRICE */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-orange-50 px-6 py-4">
              <span className="text-3xl font-semibold text-orange-500">
                ₹{product.price}
              </span>
              <span className="text-sm text-gray-500">Inclusive of GST</span>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-200" />

            {/* BUY OPTIONS */}
            <BuyOptions product={product} />

            {/* TRUST BADGES */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <FiShield /> Secure Payment
              </span>
              <span className="flex items-center gap-2">
                <FiTruck /> Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <FiRefreshCw /> Cash on Delivery
              </span>
              <span className="flex items-center gap-2">
                <FiTool /> Service Support
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle /> 1 Year Warranty
              </span>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        {product.features?.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl font-semibold mb-6">
              Key <span className="text-orange-500">Features</span>
            </h2>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="rounded-xl border bg-orange-50 p-4 text-gray-700"
                >
                  ✔ {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SPEC TABLE */}
        {product.specs && (
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl font-semibold mb-6">
              Technical <span className="text-orange-500">Specifications</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr
                      key={key}
                      className="border-b last:border-none"
                    >
                      <td className="px-4 sm:px-6 py-4 text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </td>
                      <td className="px-4 sm:px-6 py-4 font-medium text-gray-900 text-right">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
