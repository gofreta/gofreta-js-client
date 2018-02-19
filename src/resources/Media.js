const BaseResource = require('@/BaseResource');

/**
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
module.exports = class Media extends BaseResource {
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
            'url':     '/media',
            'params':  queryParams
        });
    }

    /**
     * @param  {String} id
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getOne(id, queryParams = {}) {
        return this.$http({
            'method':  'get',
            'url':     '/media/' + id,
            'params':  queryParams
        });
    }

    /**
     * @param  {Number} id
     * @param  {String} name
     * @param  {String} description
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    update(id, name, description, bodyParams = {}, queryParams = {}) {
        var data = Object.assign({
            'name':        name,
            'description': description,
        }, bodyParams);

        return this.$http({
            'method':  'put',
            'url':     '/media/' + id,
            'params':  queryParams,
            'data':    data
        });
    }

    /**
     * @param  {Number} id
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    delete(id, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method':  'delete',
            'url':     '/media/' + id,
            'params':  queryParams,
            'data':    bodyParams
        });
    }
}
