import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const blog = state?.blog;
  const assetBaseUrl = import.meta.env.VITE_ASSET_BASE_URL;

  // 🔴 Direct URL / refresh case
  if (!blog || blog.id.toString() !== id) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-gray-500 mb-6 text-lg">
          Blog data not available.
        </p>
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
        >
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Top spacing */}
      <div className="h-16 sm:h-24" />

      <div className="px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:underline"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Blog Card */}
        <article className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image */}
          {blog.image_path && (
            <div className="relative">
              <img
                src={`${assetBaseUrl}/${blog.image_path}`}
                alt={blog.title}
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 sm:p-10 lg:p-14">
            {/* Meta */}
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-4">
              <FaCalendarAlt className="text-orange-500" />
              <span>
                {blog.created_at &&
                  new Date(blog.created_at).toLocaleDateString()}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 leading-tight mb-10">
              {blog.title}
            </h1>

            {/* Divider */}
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-10 rounded-full" />

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer */}
            <div className="mt-16 pt-8 border-t text-sm text-gray-500 text-right">
              Published on{" "}
              {blog.created_at &&
                new Date(blog.created_at).toLocaleDateString()}
            </div>
          </div>
        </article>
      </div>

      {/* Bottom spacing */}
      <div className="h-24" />
    </div>
  );
};

export default BlogDetail;
