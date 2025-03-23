import axiosInstance from "./axois";

const apiCall = async ({ method = 'GET', url, data = null, headers = {} }) => {
  try {

    console.log("Making API call to:", url); // Debugging line
    console.log("Request headers:", headers); 

    // Set loading state to true
    let isLoading = true;

    // Make the API call using the Axios instance
    const response = await axiosInstance({
      method,
      url,
      data,
      headers,
    });

    console.log("API response:", response);

    // Set loading state to false after the response
    isLoading = false;

    // Return the response data and success status
    return {
      isLoading,
      data: response.data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    // Handle errors
    let errorMessage = 'An error occurred';
    if (error.response) {
      // The request was made and the server responded with a status code
      errorMessage = error.response.data.message || error.response.statusText;
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'No response from the server';
    } else {
      // Something happened in setting up the request
      errorMessage = error.message;
    }

    // Return the error and loading state
    return {
      isLoading: false,
      data: null,
      error: errorMessage,
      status: error.response ? error.response.status : null,
    };
  }
};

export default apiCall;