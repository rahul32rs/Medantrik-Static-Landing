import { useState } from "react";
import CODForm from "./CODForm";
import { FiShoppingCart, FiTruck } from "react-icons/fi";

export default function BuyOptions({ product }) {
  const [showCOD, setShowCOD] = useState(false);

  const isOutOfStock = product.availability === "out_of_stock";

  return (
    <div className="mt-4">

      {/* TITLE */}
      {/* <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
        {product.title || product.name}
      </h2> */}

      {/* SUB DESC */}
      {/* {product.shortDesc && (
        <p className="mt-3 text-gray-600 leading-relaxed">
          {product.shortDesc}
        </p>
      )} */}

      {/* PRICE + STOCK */}
      {/* <div className="mt-5 flex flex-wrap items-center gap-4">
        {product.price && (
          <span className="text-2xl sm:text-3xl font-semibold text-orange-500">
            ₹{product.price}
          </span>
        )}

        {product.availability && (
          <span
            className={`text-sm font-medium ${
              isOutOfStock ? "text-red-500" : "text-green-600"
            }`}
          >
            ● {isOutOfStock ? "Out of Stock" : "In Stock"}
          </span>
        )}
      </div> */}

      {/* CTA BUTTONS */}
<div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

  {/* BUY ONLINE */}
  <a
    href={product.paymentLink || "https://rzp.io/rzp/yuO1QBnZ"}
    target="_blank"
    rel="noreferrer"
    className={`
      flex items-center justify-center gap-2
      rounded-2xl px-6 py-4
      text-base font-medium text-white
      transition
      ${
        isOutOfStock
          ? "bg-gray-400 pointer-events-none"
          : "bg-[#0b133c] hover:bg-[#070c2a]"
      }
    `}
  >
    <FiShoppingCart className="text-lg" />
    Pay Now
  </a>

  {/* COD */}
  <button
    onClick={() => setShowCOD(true)}
    disabled={isOutOfStock}
    className={`
      flex items-center justify-center gap-2
      rounded-2xl px-6 py-4
      text-base font-medium text-white
      transition
      ${
        isOutOfStock
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-orange-500 hover:bg-orange-600"
      }
    `}
  >
    <FiTruck className="text-lg" />
    Pay on Delivery
  </button>
</div>


      {/* COD MODAL */}
      {showCOD && (
        <CODForm
          product={product}
          onClose={() => setShowCOD(false)}
        />
      )}

      {/* TRUST BADGES */}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
        <span>✔ Secure checkout</span>
        <span>✔ COD available</span>
        <span>✔ Fast dispatch</span>
      </div>
    </div>
  );
}
