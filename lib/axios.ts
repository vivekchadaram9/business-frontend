// lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: 'backend url',
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Request Interceptor (e.g., OAuth token)
api.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ⚠️ Optional Response Interceptor (e.g., token refresh, global errors)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle token expiry or redirect to login
      console.error("Unauthorized, redirecting...");
    }
    return Promise.reject(error);
  }
);

export default api;
