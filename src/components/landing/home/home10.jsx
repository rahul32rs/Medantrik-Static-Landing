import React, { useEffect, useState } from 'react';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getBlogs } from '../../../api/blogs.api';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Home10() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const assetBaseUrl = import.meta.env.VITE_ASSET_BASE_URL;

  useEffect(() => {
    let ignore = false;

    getBlogs()
      .then((res) => {
        if (ignore) return;
        const list = res?.data?.data || [];
        setBlogs(list.slice(0, 3)); // 🔥 ONLY 3 LATEST
      })
      .catch((err) => {
        if (ignore) return;
        console.error('BLOG HOME ERROR:', err);
        setError('Failed to load blogs');
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const onKeyNavigate = (e, to) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(to);
    }
  };

  /* ---------------- STATES ---------------- */

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

  /* ---------------- UI ---------------- */

  return (
    <div className="w-full relative overflow-hidden bg-white">
      {/* Decorative Image */}
      <img
        src="https://images.unsplash.com/photo-1559757175-08e7b052f5d6?q=80&w=1200&auto=format&fit=crop"
        alt=""
        className="absolute right-0 top-0 w-[260px] opacity-20 pointer-events-none"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-[48px] font-semibold">
            Medantrik
            <span className="text-orange-600"> Blogs</span>
          </h2>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Explore the latest products and medical insights
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
          {blogs.map((post, idx) => (
            <motion.article
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`, { state: { blog: post } })}
              onKeyDown={(e) =>
                onKeyNavigate(e, `/blog/${post.id}`)
              }
              tabIndex={0}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-200"
              variants={cardVariants}
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              whileHover={
                reduceMotion
                  ? undefined
                  : { rotateX: 3, rotateY: -3 }
              }
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative mb-4">
                {post.image_path ? (
                  <img
                    src={`${assetBaseUrl}/${post.image_path}`}
                    alt={post.title}
                    className="rounded-xl w-full h-52 object-cover"
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

              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {post.title}
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-500">
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
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
