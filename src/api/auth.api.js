import { axiosInstance } from "./axiosInstance";

/**
 * @typedef {Object} LoginReqType
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 */

/**
 * @typedef {Object} RegisterReqType
 * @property {string} name - The user name.
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 * @property {string} telefone - The user contact number.
 */

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

/**
 * @param {RegisterReqType} req The request body.
 */
async function register(req) {
  const response = await axiosInstance.post(
    '/auth/register',
    req
  );

  return response;
}

export { login, register }

