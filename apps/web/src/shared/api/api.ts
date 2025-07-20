// import { envConfig } from "@/env";
import axios from "axios";
import { getValue } from "../native/local-storage";
import { ACCESS_TOKEN_KEY } from "../consts/local-stotage";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  const token = getValue(ACCESS_TOKEN_KEY);

  if (!token) {
    return config;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 400) {
//       return Promise.reject(error);
//     }
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorageToken.getRefreshToken();

//         if (!refreshToken) {
//           throw new Error("No refresh token found");
//         }

//         const { data } = await authApi.refreshToken(refreshToken);

//         localStorageToken.setAccessToken(data.tokens.accessToken);
//         localStorageToken.setRefreshToken(data.tokens.refreshToken);

//         originalRequest.headers.Authorization = `Bearer ${data.tokens.accessToken}`;

//         return api(originalRequest);
//       } catch (err) {
//         console.error("Failed to refresh token:", err);
//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
