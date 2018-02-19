const BaseResource = require('@/BaseResource');

/**
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
module.exports = class Collection extends BaseResource {
    /**
     * @param  {Number} [page]
     * @param  {Number} [limit]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getList(page = 1, limit = 20, queryParams = {}) {
        queryParams = Object.assign({
            'page':  page,
            'limit': limit
        }, queryParams);

        return this.$http({
            'method':  'get',
            'url':     '/collections',
            'params':  queryParams
        });
    }

    /**
     * @param  {String} identifier
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getOne(identifier, queryParams = {}) {
        return this.$http({
            'method':  'get',
            'url':     '/collections/' + identifier,
            'params':  queryParams
        });
    }

    /**
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    create(bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method':  'post',
            'url':     '/collections',
            'params':  queryParams,
            'data':    bodyParams
        });
    }

    /**
     * @param  {String} identifier
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    update(identifier, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method':  'put',
            'url':     '/collections/' + identifier,
            'params':  queryParams,
            'data':    bodyParams
        });
    }

    /**
     * @param  {String} identifier
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    delete(identifier, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method':  'delete',
            'url':     '/collections/' + identifier,
            'params':  queryParams,
            'data':    bodyParams
        });
    }
}
