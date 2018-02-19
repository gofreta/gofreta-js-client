const BaseResource = require('@/BaseResource');

/**
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
module.exports = class Auth extends BaseResource {
    /**
     * @param  {String} username
     * @param  {String} password
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    login(username, password, bodyParams = {}, queryParams = {}) {
        var data = Object.assign({
            'username': username,
            'password': password
        }, bodyParams);

        return this.$http({
            'method': 'post',
            'url':    '/auth',
            'params': queryParams,
            'data':   data
        });
    }

    /**
     * @param  {String} username
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    sendResetPasswordEmail(username, bodyParams = {}, queryParams = {}) {
        var data = Object.assign({
            'username': username
        }, bodyParams);

        return this.$http({
            'method': 'post',
            'url':    '/forgotten-password',
            'params': queryParams,
            'data':   data
        });
    }

    /**
     * @param  {String} resetPasswordHash
     * @param  {String} password
     * @param  {String} passwordConfirm
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    resetPassword(resetPasswordHash, password, passwordConfirm, bodyParams = {}, queryParams = {}) {
        var data = Object.assign({
            'password':        password,
            'password_confirm': passwordConfirm
        }, bodyParams);

        return this.$http({
            'method': 'post',
            'url':    '/reset-password/' + resetPasswordHash,
            'params': queryParams,
            'data':   data
        });
    }
}
