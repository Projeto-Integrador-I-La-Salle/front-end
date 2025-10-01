import { axiosInstance } from "./axiosInstance";

import '../types/global';

/**
 * Get list of products.
 *
 * @param {PageType} page
 * @returns {Promise<AxiosResponse<Array<ProductType>>>}
 */
export async function get({ pageSize = 20, pageNumber = 1 } = {}) {
  const response = await axiosInstance.get(
    `/produtos?page=${pageNumber}&per_page=${pageSize}`
  );

  return response;
}

/**
 * Get a product.
 *
 * @param {string} id - The product identifier.
 * @returns {Promise<AxiosResponse<ProductType>>}
 */
export async function getById(id) {
  if (!id) {
    throw new Error('[ERROR]: Param id is expected.');
  }

  if (typeof id !== 'string') {
    throw new Error('[ERROR]: Param id should be of type string.');
  }

  const response = await axiosInstance.get(
    `/produtos/${id}`
  );

  return response;
}

