import apiCall from "./apiCall";

/**
 * Utility function for making authenticated API calls
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} url - API endpoint URL
 * @param {Object} data - (Optional) Request payload
 * @param {Object} headers - (Optional) Additional headers
 * @returns {Promise} - Resolves with the response data or rejects with an error
 */


const authenticatedApiCall = async ({ method = 'GET', url, data = null, headers = {} }) => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('authToken');
  // console.log("token au",token);
  

  if (!token) {
    
    throw new Error('No authentication token found. Please log in.');
  }

  // Add the token to the headers
  const authHeaders = {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
  console.log("Request headers:", authHeaders)

  // Make the API call using the apiCall utility
  const result = await apiCall({
    method,
    url,
    data,
    headers: authHeaders,
  });

  console.log("API Response:", result);

  // Handle the response
  if (result.error) {
    throw new Error(result.error);
  }

  return result.data;
};

export default authenticatedApiCall;