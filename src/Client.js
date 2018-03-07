const HTTP         = require('axios');
const BaseResource = require('@/BaseResource');

/**
 * API HTTP Client
 *
 * @property {String}       $baseUrl
 * @property {Axios}        $http
 * @property {String}       $token
 * @property {BaseResource} {...ServiceName}
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
 module.exports = class Client {
    /**
     * @param {String} [baseUrl]    API base url
     * @param {String} [token]      Authorization token key
     * @param {Object} [httpConfig] HTTP client config (available settings - https://github.com/mzabriskie/axios#request-config)
     */
    constructor(baseUrl = '', token = '', httpConfig) {
        httpConfig = (typeof httpConfig === 'object' && httpConfig !== null) ? httpConfig : {};

        this.$baseUrl = baseUrl;

        // init HTTP client
        this.$http = HTTP.create(Object.assign({
            baseURL: this.$baseUrl
        }, httpConfig));

        this.setToken(token);

        // load all resources
        var resourceClass = null;
        var resourcesContext = require.context('./resources/', true, /\.(js)$/);
        resourcesContext.keys().forEach((file) => {
            resourceClass = resourcesContext(file);
            if (resourceClass && resourceClass.prototype instanceof BaseResource) {
                this[resourceClass.prototype.constructor.name] = new resourceClass(this.$http);
            }
        });
    }

    /**
     * Sets authorization token.
     *
     * @param  {String} token
     * @return {Client}
     */
    setToken(token = '') {
        this.$token = token;

        if (!this.$http) {
            return;
        }

        if (this.$token) {
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$token;
        } else if (this.$http.defaults.headers.common['Authorization']) {
            delete this.$http.defaults.headers.common['Authorization'];
        }

        return this;
    }
}
