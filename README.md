Gofreta JS API client
======================================================================

> **The project is still in very early stage of development and is not recommended to be used in production environment, unless you really know what you are doing!**

Simple and compact (~5kb gzip) Gofreta JS API client for the browser and node.js (based on [axios](https://github.com/axios/axios) HTTP client).

- [Install](#install)
- [Development](#development)
- [Usage](#usage)


## Install

#### Using npm
```bash
npm install gofreta-client --save
```

_ES6-style import supported:_
```js
import Client from 'gofreta-client'
```

#### Manual
```bash
<script src="/path/to/dist/client.min.js"></script>
```

#### Example
```js
var clientInst = new Client('my_api_url')

clientInst.Auth.Login("username", "password").then(function (data) {
    // success...
    // (see axios response schema - https://github.com/axios/axios#response-schema)
}).catch(function (e) {
    // error...
})
```


## Development
```js
# build and minify for production
npm run build

# run unit tests
npm test
```


## Usage

| Name                                                                 | Return   | Description                                |
|:---------------------------------------------------------------------|:---------|:-------------------------------------------|
| `var client = new Client(baseUrl = '', token = '', httpConfig = {})` | `Client` | Initializes new `Client` instance.         |
| `client.setToken(token = '')`                                        | `Client` | Sets or remove authorization token header. |

List with available resources (each returns a `Promise` object):

| Name                                                                                                         | Description                                                        | Authentication    |
|:-------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|:------------------|
| _Auth_                                                                                                       |                                                                    |                   |
| `client.Auth.login(username, password, bodyParams = {}, queryParams = {})`                                   | Authenticates an user and generates new Auth token.                | N/A               |
| `client.Auth.sendResetPasswordEmail(username, bodyParams = {}, queryParams = {})`                            | Sends a reset user password email.                                 | N/A               |
| `client.Auth.resetPassword(resetPasswordHash, password, passwordConfirm, bodyParams = {}, queryParams = {})` | Resets a forgotten user password.                                  | N/A               |
| _Language_                                                                                                   |                                                                    |                   |
| `client.Language.getList(page = 1, limit = 20, queryParams = {})`                                            | Gets a paginated Language models list.                             | User or Key token |
| `client.Language.getOne(id, queryParams = {})`                                                               | Gets a single Language model.                                      | User or Key token |
| `client.Language.create(bodyParams = {}, queryParams = {})`                                                  | Creates a new Language model.                                      | User or Key token |
| `client.Language.update(id, bodyParams = {}, queryParams = {})`                                              | Updates an existing Language model.                                | User or Key token |
| `client.Language.delete(id, bodyParams = {}, queryParams = {})`                                              | Deletes an existing Language model.                                | User or Key token |
| _Media_                                                                                                      |                                                                    |                   |
| `client.Media.getList(page = 1, limit = 20, queryParams = {})`                                               | Gets a paginated Media models list.                                | User or Key token |
| `client.Media.getOne(id, queryParams = {})`                                                                  | Gets a single Media model.                                         | User or Key token |
| `client.Media.update(id, title, description, bodyParams = {}, queryParams = {})`                             | Updates an existing Media model meta properties.                   | User or Key token |
| `client.Media.delete(id, bodyParams = {}, queryParams = {})`                                                 | Deletes an existing Media model.                                   | User or Key token |
| _User_                                                                                                       |                                                                    |                   |
| `client.User.getList(page = 1, limit = 20, queryParams = {})`                                                | Gets a paginated User models list.                                 | User token        |
| `client.User.getOne(id, queryParams = {})`                                                                   | Gets a single User model.                                          | User token        |
| `client.User.create(bodyParams = {}, queryParams = {})`                                                      | Creates a new User model.                                          | User token        |
| `client.User.update(id, bodyParams = {}, queryParams = {})`                                                  | Updates an existing User model.                                    | User token        |
| `client.User.delete(id, bodyParams = {}, queryParams = {})`                                                  | Deletes an existing User model.                                    | User token        |
| _Key_                                                                                                        |                                                                    |                   |
| `client.Key.getList(page = 1, limit = 20, queryParams = {})`                                                 | Gets a paginated Key models list.                                  | User token        |
| `client.Key.getOne(id, queryParams = {})`                                                                    | Gets a single Key model.                                           | User token        |
| `client.Key.create(bodyParams = {}, queryParams = {})`                                                       | Creates a new Key model.                                           | User token        |
| `client.Key.update(id, bodyParams = {}, queryParams = {})`                                                   | Updates an existing Key model.                                     | User token        |
| `client.Key.delete(id, bodyParams = {}, queryParams = {})`                                                   | Deletes an existing Key model.                                     | User token        |
| _Collection_                                                                                                 |                                                                    |                   |
| `client.Collection.getList(page = 1, limit = 20, queryParams = {})`                                          | Gets a paginated Collection models list.                           | User token        |
| `client.Collection.getOne(identifier, queryParams = {})`                                                     | Gets a single Collection model.                                    | User token        |
| `client.Collection.create(bodyParams = {}, queryParams = {})`                                                | Creates a new Collection model.                                    | User token        |
| `client.Collection.update(identifier, bodyParams = {}, queryParams = {})`                                    | Updates an existing Collection model.                              | User token        |
| `client.Collection.delete(identifier, bodyParams = {}, queryParams = {})`                                    | Deletes an existing Collection model and all its related entities. | User token        |
| _Entity_                                                                                                     |                                                                    |                   |
| `client.Entity.getList(collectionIdentifier, page = 1, limit = 20, queryParams = {})`                        | Gets a paginated Entity models list.                               | User or Key token |
| `client.Entity.getOne(collectionIdentifier, id, queryParams = {})`                                           | Gets a single Entity model.                                        | User or Key token |
| `client.Entity.create(collectionIdentifier, bodyParams = {}, queryParams = {})`                              | Creates a new Entity model.                                        | User or Key token |
| `client.Entity.update(collectionIdentifier, id, bodyParams = {}, queryParams = {})`                          | Updates an existing Entity model.                                  | User or Key token |
| `client.Entity.delete(collectionIdentifier, id, bodyParams = {}, queryParams = {})`                          | Deletes an existing Entity model.                                  | User or Key token |


## Credits

Gofreta JS API client is part from [Gofreta](https://gofreta.com) - an Open Source project licensed under the [BSD3-License](LICENSE.md).

Help us improve and continue the project development - [https://gofreta.com/support-us](https://gofreta.com/support-us)
