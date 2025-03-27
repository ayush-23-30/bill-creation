// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_SERVER,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });


// // Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Skip auth header for public endpoints
    
//       const token = localStorage.getItem('authToken'); 
//       // Changed to 'authToken' for consistency
      
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//         console.debug(`Adding auth token to request: ${config.url}`); // More specific log
//       } else {
//         console.warn(`No token found for authenticated endpoint: ${config.url}`);
//         // Consider redirecting to login here if needed
//       }
    
    
//     return config;
//   },
//   (error) => {
//     console.error('Request interceptor error:', error);
//     return Promise.reject(error);
//   }
// );

// // // Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     console.log('Response from:', response.config.url, response.data);
//     return response;
//   },
//   (error) => {
//     // Enhanced error handling
//     if (error.response) {
//       console.error('API Error Response:', {
//         status: error.response.status,
//         data: error.response.data,
//         url: error.config.url
//       });

//       // Handle specific status codes
//       if (error.response.status === 401) {
//         localStorage.removeItem('authToken'); // Clear invalid token
//       }
      
//       if (error.response.status === 403) {
//         console.error('Forbidden access');
//       }
//     } else if (error.request) {
//       console.error('No response received:', error.request);
//     } else {
//       console.error('Request setup error:', error.message);
//     }

//     return Promise.reject(error);
//   }
// );


// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor (simplified - no auth logic)
axiosInstance.interceptors.request.use(
  (config) => {
    if (import.meta.env.DEV) {
      console.debug(`Making request to: ${config.url}`);
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor (basic error handling)
axiosInstance.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.debug(`Response from ${response.config.url}`, response.data);
    }
    return response;
  },
  (error) => {
    const errorInfo = {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message
    };
    console.error('API Error:', errorInfo);
    return Promise.reject(error);
  }
);

export default axiosInstance;