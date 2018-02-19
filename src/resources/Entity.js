const BaseResource = require('@/BaseResource');

/**
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
module.exports = class Entity extends BaseResource {
    /**
     * @param  {String} collectionIdentifier
     * @param  {Number} [page]
     * @param  {Number} [limit]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getList(collectionIdentifier, page = 1, limit = 20, queryParams = {}) {
        queryParams = Object.assign({
            'page':  page,
            'limit': limit
        }, queryParams);

        return this.$http({
            'method': 'get',
            'url':    '/collections/' + collectionIdentifier + '/entities',
            'params': queryParams
        });
    }

    /**
     * @param  {String} collectionIdentifier
     * @param  {String} id
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getOne(collectionIdentifier, id, queryParams = {}) {
        return this.$http({
            'method': 'get',
            'url':    '/collections/' + collectionIdentifier + '/entities/' + id,
            'params': queryParams
        });
    }

    /**
     * @param  {String} collectionIdentifier
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    create(collectionIdentifier, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method': 'post',
            'url':    '/collections/' + collectionIdentifier + '/entities',
            'params': queryParams,
            'data':   bodyParams
        });
    }

    /**
     * @param  {String} collectionIdentifier
     * @param  {String} id
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    update(collectionIdentifier, id, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method': 'put',
            'url':    '/collections/' + collectionIdentifier + '/entities/' + id,
            'params': queryParams,
            'data':   bodyParams
        });
    }

    /**
     * @param  {String} collectionIdentifier
     * @param  {String} id
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    delete(collectionIdentifier, id, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method': 'delete',
            'url':    '/collections/' + collectionIdentifier + '/entities/' + id,
            'params': queryParams,
            'data':   bodyParams
        });
    }
}
