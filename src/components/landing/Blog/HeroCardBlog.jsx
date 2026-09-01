import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { getBlogs } from "../../../api/blogs.api";

const HeroCardBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    getBlogs()
      .then((res) => {
        if (ignore) return;
        const list = res?.data?.blogs || res?.data?.data || [];
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

  const getImageUrl = (post) => {
    let imgSrc = post?.featuredImage || post?.image_path || post?.image || post?.coverImage || post?.thumbnail || post?.imageUrl || post?.featured_image || post?.image_url || post?.cover_image || post?.blogImage || post?.blog_image || post?.photo || post?.banner;
    
    // Debug log to see the exact API response for a post (commented out by default, but useful for debugging)
    console.log("Post data:", post);

    // Fallback: If no explicit featured image, extract first <img> tag from blog content
    if (!imgSrc && post?.content) {
      const match = post.content.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (match && match[1]) {
        imgSrc = match[1];
      }
    }

    // --- HARDCODED FALLBACK FOR SPECIFIC BLOGS ---
    if (!imgSrc) {
      if (post?.title?.includes("NODEX Device")) {
        return "/images/blog/blog1.png";
      } else if (post?.title?.includes("Spiritual Growth")) {
        return "/images/blog/blog2.jpg";
      } else if (post?.title?.includes("Modern Life")) {
        return "/images/blog/blog3.png";
      } else if (post?.title?.includes("Understanding Medantrik")) {
        return "/images/blog/blog4.jpg";
      }
    }

    if (!imgSrc) return null;
    imgSrc = imgSrc.trim();

    if (imgSrc.startsWith("//")) {
      return `https:${imgSrc}`;
    }

    if (
      imgSrc.startsWith("data:") ||
      imgSrc.startsWith("http://") ||
      imgSrc.startsWith("https://")
    ) {
      return imgSrc;
    }

    const baseUrl =
      import.meta.env.VITE_ASSET_BASE_URL ||
      (import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace(/\/api\/?$/, "") : "") ||
      "https://landingpageapi.medantrik.com";

    const cleanBase = baseUrl.replace(/\/$/, "");
    const cleanPath = imgSrc.replace(/^\//, "");
    return `${cleanBase}/${cleanPath}`;
  };

  const getDateString = (post) => {
    const dateVal = post?.publishDate || post?.createdAt || post?.created_at;
    return dateVal ? new Date(dateVal).toLocaleDateString() : "";
  };

  const getAuthorName = (post) => {
    if (typeof post?.author === "object" && post?.author?.name) {
      return post.author.name;
    }
    if (typeof post?.author === "string") return post.author;
    return "Admin";
  };

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
        {blogs.map((post) => {
          const imageUrl = getImageUrl(post);
          const formattedDate = getDateString(post);
          const authorName = getAuthorName(post);

          return (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              state={{ blog: post }}
              className="group"
            >
              <article className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col">
                
                {/* Image */}
                <div className="relative mb-4">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
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
                    dangerouslySetInnerHTML={{ __html: post.excerpt || post.content }}
                  />

                  <div className="mt-auto pt-6 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-orange-500" />
                      <span>{authorName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-orange-500" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCardBlog;
