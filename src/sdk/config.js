const baseUrl = import.meta.env.VITE_BACKEND_SERVER;


var Config = {
  // http request constants
  BASE_URL: baseUrl,

  // Common constants
  GET_METHOD: "GET",
  POST_METHOD: "POST",
  DELETE_METHOD:"DELETE",
  JSON_REQUEST: "json",
  // MEDIA_BASE_URL: mediaUrl,

  //Error codes
  SERVER_ERROR: "err_internal_server_error",

  // End Points
  API_ENDPOINTS: {
    API_URN_ADMIN_LOGIN: "/api/auth/login",
  },
};
export default Config;
