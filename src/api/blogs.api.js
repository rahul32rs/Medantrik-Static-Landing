import axiosClient from "./axiosClient";

// ✅ DEFAULT EMPTY OBJECT ADDED
export const getBlogs = ({ page = 1, limit = 5, search = "" } = {}) => {
  return axiosClient.get("/get_blogs.php", {
    params: { page, limit, search },
  });
};
