// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_SERVER,
// });

// // Add a request interceptor to include the token dynamically

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   // Handle request error
//   return Promise.reject(error);
// });

// export default axiosInstance;



import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json', 
    
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Example: Handle unauthorized access
      console.error('Unauthorized access. Redirecting to login...');
      // Redirect to login or refresh token logic
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;