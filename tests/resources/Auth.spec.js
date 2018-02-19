const assert      = require('chai').assert;
const axios       = require('axios');
const mockAdapter = require ('axios-mock-adapter');
const Auth        = require('@/resources/Auth');

/**
 * Auth API resource tests.
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
describe('Auth', function () {
    var adapter  = new mockAdapter(axios);
    var resource = new Auth(axios.create());

    // mock all requests
    adapter.onAny().reply(200);

    describe('login()', function () {
        it('Should correctly set request data', function (done) {
            var bodyParams  = {'body_test1': 1, 'body_test2': 2};
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.login('admin', '123456', bodyParams, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/auth');
                assert.equal(response.config.method, 'post');
                assert.deepEqual(response.config.params, queryParams);
                assert.deepEqual(JSON.parse(response.config.data), Object.assign({}, bodyParams, {
                    'username': 'admin',
                    'password': '123456'
                }));
            }).then(done).catch(done);
        });
    });

    describe('sendResetPasswordEmail()', function () {
        it('Should correctly set request data', function (done) {
            var bodyParams  = {'body_test1': 1, 'body_test2': 2};
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.sendResetPasswordEmail('admin', bodyParams, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/forgotten-password');
                assert.equal(response.config.method, 'post');
                assert.deepEqual(response.config.params, queryParams);
                assert.deepEqual(JSON.parse(response.config.data), Object.assign({}, bodyParams, {
                    'username': 'admin'
                }));
            }).then(done).catch(done);
        });
    });

    describe('resetPassword()', function () {
        it('Should correctly set request data', function (done) {
            var bodyParams  = {'body_test1': 1, 'body_test2': 2};
            var queryParams = {'query_test1': 1, 'query_test2': 2};
            var result      = resource.resetPassword('my_test_hash', '123456', '123456', bodyParams, queryParams);

            assert.instanceOf(result, Promise);
            result.then(function (response) {
                assert.equal(response.config.url, '/reset-password/my_test_hash');
                assert.equal(response.config.method, 'post');
                assert.deepEqual(response.config.params, queryParams);
                assert.deepEqual(JSON.parse(response.config.data), Object.assign({}, bodyParams, {
                    'password':         '123456',
                    'password_confirm': '123456'
                }));
            }).then(done).catch(done);
        });
    });
});
