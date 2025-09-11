import { axiosInstance } from "./axiosInstance";
import '../types/global';

/**
 * Get list of products.
 *
 * @returns {Promise<import("axios").AxiosResponse<Array<ProductType>>>}
 */
export async function get() {
  const response = await axiosInstance.get(
    '/produtos'
  );

  return response;
}

