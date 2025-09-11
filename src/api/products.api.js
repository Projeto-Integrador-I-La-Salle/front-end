import { axiosInstance } from "./axiosInstance";

export async function get() {
  const response = await axiosInstance.get(
    '/produtos'
  );

  return response;
}

