import { axiosInstance } from "./axiosInstance";

/**
 * @param {CreateOrderRequest} req
 * */
export async function create(req) {
  const response = await axiosInstance.post(
    `/reservas`,
    req
  );

  return response;
}

export async function get({ pageSize = 20, pageNumber = 1 } = {}) {
  const response = await axiosInstance.get(
    `/admin/reservas?page=${pageNumber}&per_page=${pageSize}`
  );

  return response;
}

/**
 * @param {Number} id
 * */
export async function getById(id) {
  const response = await axiosInstance.get(
    `/admin/reservas/${id}`
  );

  return response;
}

