import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/ConatctUs";
import Career from "../pages/career/Career";

import Products from "../pages/products/Products";
import Nodex from "../pages/nodexproduct/Nodex";
import Oxysense from "../pages/oxysenseproduct/Oxysense";
import MeshNebulizer from "../pages/meshnebulizer/MeshNebulizer";

import OrderProduct from "../pages/orderproducts/orderproducts";
import OrderProductDetail from "../pages/orderproducts/OrderProductDetail";

import AllBlogs from "../pages/blog/Blog";
import BlogDetail from "../components/landing/Blog/BlogDetail";

import Privacypolicy from "../pages/privacypolicy/privacypolicy";
import Terms from "../pages/terms/terms";
import Returnsandex from "../pages/returns/returnsandex";
import Support from "../pages/support/support";
import Faq from "../pages/faq/faq";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/nodex" element={<Nodex />} />
        <Route path="/products/oxysense" element={<Oxysense />} />
        <Route path="/products/meshnebulizer" element={<MeshNebulizer />} />

        {/* Order Products */}
        <Route path="/order-products" element={<OrderProduct />} />
        <Route path="/order-products/:slug" element={<OrderProductDetail />} />

        {/* Blog */}
        <Route path="/blog" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Legal / Support */}
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returnsandex" element={<Returnsandex />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<Faq />} />

      </Route>
    </Routes>
  );
}
