import blogsData from "../data/blogs.json";

export const getBlogs = async ({ page = 1, limit = 10, search = "" } = {}) => {
  let filtered = blogsData;
  if (search) {
    const s = search.toLowerCase();
    filtered = blogsData.filter(
      (b) =>
        (b.title && b.title.toLowerCase().includes(s)) ||
        (b.post_title && b.post_title.toLowerCase().includes(s)) ||
        (b.description && b.description.toLowerCase().includes(s)) ||
        (b.content && b.content.toLowerCase().includes(s))
    );
  }
  return {
    data: {
      blogs: filtered,
      data: filtered,
      totalBlogs: filtered.length,
    },
  };
};

export const getBlogById = async (id) => {
  const blog = blogsData.find((b) => b.id.toString() === id.toString());
  return { data: blog || null };
};

export const getBlogBySlug = async (slug) => {
  const blog = blogsData.find(
    (b) => b.id.toString() === slug.toString() || b.slug === slug
  );
  return { data: blog || null };
};
