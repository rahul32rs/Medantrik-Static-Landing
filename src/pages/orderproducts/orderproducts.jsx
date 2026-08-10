import { useNavigate } from "react-router-dom";
import PRODUCTS_LIST from "../../data/products.list";
import ProductCard from "../../components/landing/orderproducts/ProductCard";

export default function OrderProducts() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold py-6">
          Order <span className="text-orange-500">Products</span>
        </h2>

        {/* sub heading */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-2">
          Choose from our range of medical and IoT devices designed for accuracy,
          safety, and performance.
        </p>

        {/* product grid */}
        <div
          className="
            mt-24
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-y-32 gap-x-14
            sm:gap-y-20
            lg:gap-14
          "
        >
          {PRODUCTS_LIST.map((p) => (
            <ProductCard
              key={p.id}
              p={{
                ...p,
                route: `/order-products/${p.id}`, // 🔑 single source of truth
              }}
              onExplore={navigate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
