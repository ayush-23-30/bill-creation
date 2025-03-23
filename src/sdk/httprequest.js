import axios from "axios";
import qs from "qs";

/**
 * Common HTTP request handler using Axios
 */
const HttpBrowser = {
  /**
   * Fetch data from a remote server.
   * @param {Function} cb - Callback function invoked after execution
   * @param {String} url - Full API endpoint URL
   * @param {String} method - HTTP method (GET | POST | PUT | DELETE)
   * @param {Object} params - (Optional) Params to send with the request
   * @param {String} requestContentType - (Optional) Request content type ('json' | 'x-www-form-urlencoded' | 'multipart')
   * @param {String} auth - (Optional) Authorization token
   */
  fetch: async function (cb, url, method, params = {}, requestContentType = "json", auth = null) {
    try {
      let headers = {
        "Content-Type":
          requestContentType === "json"
            ? "application/json"
            : requestContentType === "x-www-form-urlencoded"
            ? "application/x-www-form-urlencoded"
            : "multipart/form-data",
      };

      if (auth) {
        headers["Authorization"] = `Bearer ${auth}`;
      }

      const config = {
        method,
        url,
        headers,
        data: method.toUpperCase() !== "GET" ? (requestContentType === "x-www-form-urlencoded" ? qs.stringify(params) : params) : null,
        params: method.toUpperCase() === "GET" ? params : null,
        withCredentials: true, // Same as xhrFields.withCredentials in jQuery
      };

      const response = await axios(config);
      cb(null, response.status, response.data);
    } catch (error) {
      console.error("API Request Failed:", error);
      cb(error, error.response?.status || 500, null);
    }
  },
};

export default HttpBrowser;
