import axios from "axios";
import { getCookie } from "../services/cookies";

const token = getCookie('token') || "";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api'}`,
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
});

axiosInstance.interceptors.response.use(function(response) {
  return {
    data: response?.data,
    statusCode: response?.status,
    hasError: false
  };
}, function(error) {
  return {
    data: error?.response?.data?.message,
    statusCode: error?.response?.status,
    hasError: true
  };
});

export { axiosInstance };

