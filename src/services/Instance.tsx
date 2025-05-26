import axios from 'axios';
import { BASE_URL } from './CONSTANTS';




const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Response interceptor
axiosInstance.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
      // Optionally handle unauthorized errors (e.g., logout)
      console.warn('Unauthorized - Redirecting to login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;