import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { getBlogs } from "../../../api/blogs.api";

const HeroCardBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const assetBaseUrl = import.meta.env.VITE_ASSET_BASE_URL;

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    getBlogs()
      .then((res) => {
        if (ignore) return;
        const list = res?.data?.data || [];
        setBlogs(list);
      })
      .catch((err) => {
        if (ignore) return;
        console.error("BLOG LIST ERROR:", err);
        setError("Failed to load blogs");
        setBlogs([]);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  /* -------------------- STATES -------------------- */

  if (loading) {
    return (
      <p className="text-center py-20 text-gray-500">
        Loading blogs...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        {error}
      </p>
    );
  }

  if (blogs.length === 0) {
    return (
      <p className="text-center py-20 text-gray-500">
        No blogs found.
      </p>
    );
  }

  /* -------------------- UI -------------------- */

  return (
    <div id="blogs" className="px-4 md:px-20 py-16 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-900">
        Recent Blog Posts
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            state={{ blog: post }}
            className="group"
          >
            <article className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col">
              
              {/* Image */}
              <div className="relative mb-4">
                {post.image_path ? (
                  <img
                    src={`${assetBaseUrl}/${post.image_path}`}
                    alt={post.title}
                    className="rounded-xl w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-52 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-700 shadow-sm">
                  Blog
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-orange-600 transition">
                  {post.title}
                </h3>

                <div
                  className="mt-3 text-sm text-gray-600 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-auto pt-6 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-orange-500" />
                    <span>Admin</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-orange-500" />
                    <span>
                      {post.created_at &&
                        new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroCardBlog;
