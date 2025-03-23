import HttpBrowser from '../sdk/httprequest';
import Config from '../sdk/config'

const Core = {
  /**
   * Send user assignment review content
   * @param {Function} successCb - Success callback
   * @param {Function} failedCb - Failure callback
   * @param {Function} progressCb - Progress callback (loading state)
   * @param {Object} params - API request parameters
   * @param {String} auth - Authorization token
   */
  login: function (succes_cb, failed_cb, progress_cb, params) {
    // Screen progress set to true
    progress_cb(true);

    // http Request
    HttpBrowser.fetch(
      function (error, response) {
        // Callback function
        // Incase of error
        if (response && !response.success) {
          progress_cb(false); // Screen progress set to false
          return failed_cb(response.err_l);
        }
        progress_cb(false); // Screen progress set to false

        // Return sucess response
        return succes_cb(false, response);
      },
      _api_function.constructUrn(Config.API_ENDPOINTS.API_URN_ADMIN_LOGIN),
      Config.POST_METHOD,
      params,
      "json"
    );
  },
};

export default Core;

/**
 * Private helper functions
 */
const _api_function = {
  constructUrn: function (endpoint) {
    return Config.BASE_URL + endpoint;
  },
};
