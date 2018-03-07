const assert       = require('chai').assert;
const axios        = require('axios');
const mockAdapter  = require ('axios-mock-adapter');
const Client       = require('@/Client');
const BaseResource = require('@/BaseResource');


/**
 * Client API tests.
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
describe('Client', function () {
    var adapter = new mockAdapter(axios);

    // mock all requests
    adapter.onAny().reply(200);

    describe('constructor()', function () {
        it('Should create a properly configured http client instance', function () {
            var client = new Client('test_base_url', 'test_token', { 'timeout': 1000 });

            assert.equal(client.$baseUrl, 'test_base_url');
            assert.equal(client.$token, 'test_token');
            assert.equal(client.$http.defaults.timeout, 1000);
            assert.equal(client.$http.defaults.baseURL, 'test_base_url');
            assert.equal(client.$http.defaults.headers.common['Authorization'], 'Bearer test_token');
        });

        it('Should load all api resources', function () {
            var client = new Client('test_base_url');

            var resourcesContext = require.context('./resources/', true, /\.(js)$/);
            resourcesContext.keys().forEach((file) => {
                let resourceClass = resourcesContext(file);
                if (resourceClass && resourceClass.prototype instanceof BaseResource) {
                    assert.instanceOf(client[resourceClass.prototype.constructor.name], resourceClass);
                }
            });
        });
    });

    describe('setToken()', function () {
        it('Should successfully set an authorization token and header', function () {
            var client = new Client('test_base_url');
            var result = client.setToken('test_token');

            assert.instanceOf(result, Client);
            assert.equal(client.$token, 'test_token');
            assert.equal(client.$http.defaults.headers.common['Authorization'], 'Bearer test_token');
        });

        it('Should successfully unset an authorization token and header', function () {
            var client = new Client('test_base_url', 'test_token');

            // verify that the client has defined auth token and header
            assert.equal(client.$token, 'test_token');
            assert.equal(client.$http.defaults.headers.common['Authorization'], 'Bearer test_token');

            // unset the token and header
            var result = client.setToken('');

            // verify that the client doesn't have defined auth token and header
            assert.instanceOf(result, Client);
            assert.equal(client.$token, '');
            assert.isUndefined(client.$http.defaults.headers.common['Authorization']);
        });
    });
});
