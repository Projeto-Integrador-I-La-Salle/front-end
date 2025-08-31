/**
 * @typedef {Object} LoginReqType
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 */

import { axiosInstance } from "./axiosInstance";

/**
 * @param {LoginReqType} req The request body.
 */
async function login(req) {
  const response = await axiosInstance.post(
    '/auth/login',
    req
  );

  return response;
}

export { login }

