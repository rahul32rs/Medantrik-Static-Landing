import axiosClient from "./axiosClient";

export const applyJob = (formData, onProgress) => {
  return axiosClient.post("/apply_job.php", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      if (!onProgress) return;
      const percent = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgress(percent);
    },
  });
};
