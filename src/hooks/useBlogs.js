import { useEffect, useState } from "react";
import { getBlogs } from "../api/blogs.api";

export const useBlogs = (page = 1) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getBlogs({ page, limit: 5 })
      .then((res) => {
        setBlogs(res?.data?.data || []);
      })
      .catch((err) => {
        console.error("BLOG FETCH ERROR:", err);
        setBlogs([]);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return { blogs, loading };
};
