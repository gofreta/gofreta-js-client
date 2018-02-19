const assert      = require('chai').assert;
const axios       = require('axios');
const mockAdapter = require ('axios-mock-adapter');
const Collection  = require('@/resources/Collection');

/**
 * Collection API resource tests.
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
describe('Collection', function () {
    var adapter  = new mockAdapter(axios);
    var resource = new Collection(axios.create());

    // mock all requests
    adapter.onAny().reply(200);

    describe('getList()', function () {
        it('Should correctly set request data', function (done) {
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.getList(2, 15, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/collections');
                assert.equal(response.config.method, 'get');
                assert.deepEqual(response.config.params, Object.assign({}, queryParams, {
                    'page': 2,
                    'limit': 15
                }));
            }).then(done).catch(done);
        });
    });

    describe('getOne()', function () {
        it('Should correctly set request data', function (done) {
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.getOne('test', queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/collections/test');
                assert.equal(response.config.method, 'get');
                assert.deepEqual(response.config.params, queryParams);
            }).then(done).catch(done);
        });
    });

    describe('create()', function () {
        it('Should correctly set request data', function (done) {
            var bodyParams  = {'body_test1': 1, 'body_test2': 2};
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.create(bodyParams, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/collections');
                assert.equal(response.config.method, 'post');
                assert.deepEqual(response.config.params, queryParams);
                assert.deepEqual(JSON.parse(response.config.data), bodyParams);
            }).then(done).catch(done);
        });
    });

    describe('update()', function () {
        it('Should correctly set request data', function (done) {
            var bodyParams  = {'body_test1': 1, 'body_test2': 2};
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.update('test', bodyParams, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/collections/test');
                assert.equal(response.config.method, 'put');
                assert.deepEqual(response.config.params, queryParams);
                assert.deepEqual(JSON.parse(response.config.data), bodyParams);
            }).then(done).catch(done);
        });
    });

    describe('delete()', function () {
        it('Should correctly set request data', function (done) {
            var bodyParams  = {'body_test1': 1, 'body_test2': 2};
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.delete('test', bodyParams, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/collections/test');
                assert.equal(response.config.method, 'delete');
                assert.deepEqual(response.config.params, queryParams);
                assert.deepEqual(JSON.parse(response.config.data), bodyParams);
            }).then(done).catch(done);
        });
    });
});
