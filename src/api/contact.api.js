import axiosClient from "./axiosClient";

export const sendContactMessage = async (data) => {
  const response = await axiosClient.post(
    "/send_message.php",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
