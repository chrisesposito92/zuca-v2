---
title: "JavaScript SDK"
url: "https://developer.zuora.com/zephr-docs/zephr-sdk/zephr-sdk-reference/javascript-sdk/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:49.130Z"
---

#

JavaScript SDK

The Zephr JavaScript SDK is available as an NPM module. Contact [support@zephr.com](mailto:support@zephr.com) to arrange access.

```text
const BlaizeSDK = require('./blaize-sdk.js');
const PublicApiClient = BlaizeSDK.public;
const AdminApiClient = BlaizeSDK.admin;
```

##

Client-side SDK

The client-side SDK requires you to create an instance of the PublicApiClient, providing the tenantId.

```text
let client = PublicApiClient.build(tenant);
```

Optionally, Zephr environment can be provided, too:

```text
let client = PublicApiClient.build(tenant, 'staging');
```

It is possible to specify a base URL for the Zephr service, if it is non-standard (not normally needed):

```text
let client =
PublicApiClient.build(tenant).overrideBaseUrl('http://localhost:8080');
```

For client-side implementations the SDK supports the following function

###

Register

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let sessionId = await client.register({
    identifiers: {
        'email\_address': 'helen@blaize.io'
    },
    validators: {
        'password': 'sup3r\_s3cr3t'
    },
    attributes: {
        'foo': 'bar'
    }
});
```

###

Login

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let sessionId = await client.login({
    identifiers: {
        'email\_address': 'helen@blaize.io'
    },
    validators: {
        'password': 'sup3r\_s3cr3t'
    }
});
```

###

Logout

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

client.logout(getSessionId());
```

###

Forget me

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

client.forgetMe(getSessionId());
```

###

Entitlement challenge

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';
let articleEntitlementId = '5341dc17-f91b-4311-b9ee-6906024c87a2';
let videoEntitlementId = '2b7fa1f5-795d-459e-84eb-8e0c62fb018f';

let client = PublicApiClient.build(tenant);

let results = await client.challenge(getSessionId(),
    \[articleEntitlementId, videoEntitlementId\]);

if (! results\[articleEntitlementId\]) {
        console.log("You cannot view articles");
    } if (! results\[videoEntitlementId \]) {
        console.log("You cannot view videos");
}
```

###

Request-rule decision

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let decision = await client.accessDecision(getSessionId(),
'/some/content', 'GET', {referrer: 'https://www.facebook.com'});

console.log(decision.status);
console.log(decision.body);
```

###

Get profile

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let profile = await client.retrieveProfile(getSessionId());

console.log(JSON.stringify(profile));
```

###

Update profile

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let profile = {
    'favourite-color': 'Red'
};
let merge = true; // if false, the new profile will completely replace
the entire old profile, if true only provided fields will be replaced

await client.updateProfile(getSessionId(), profile, merge);
```

###

Get extended profile document

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let profile = await client.retrieveExtendedProfile(getSessionId(),
'reading-history');

console.log(JSON.stringify(profile));
```

###

Update extended profile document

```javascript
const PublicApiClient = require('./blaize-sdk.js').public;

let tenant = 'mysite';

let client = PublicApiClient.build(tenant);

let profile = {
    'recent': \['/1.html', '/2.html'\]
};

await client.writeExtendedProfile(getSessionId(), 'reading-history',
profile);
```

##

Server-side SDK

The server-side SDK is essentially a REST client which performs HMAC request signing for the API. This SDK requires the implementor to
specify the host, path, method, body, headers and query parameters for a request and returns the response as a JSON object or plain text.

In order to make requests to the Admin API you will need to first create a keypair, which you can do in the Zephr Admin Console.

One can also use the server-side SDK to sign request for use with a different HTTP client.

###

Example REST request

```javascript
const AdminApiClient = require('./blaize-sdk.js').admin;

let tenant = 'mysite';

const accessKey = getAccessKeySecurely();
const secretKey = getSecretKeySecurely();
let client = AdminApiClient.build(tenant, accessKey, secretKey);

let responseBody = await client.get('/v3/users');
```

###

Example request using a 3rd party HTTP client

```javascript
const AdminApiClient = require('./blaize-sdk.js').admin;
const axios = require('axios');

let tenant = 'mysite';

const accessKey = getAccessKeySecurely();
const secretKey = getSecretKeySecurely();
let body = ''; // This needs to be bytewise identical to the payload, whitespace included
let path = '/v3/users';
let method = 'GET';
let timestamp = new Date().getTime();
let nonce = Math.round(Math.random() \* 1000000000000).toString(16);

let signature =
AdminApiClient.HmacSigner('SHA-256').signRequest(secretKey, body, path,
method, timestamp, nonce);

let authorizationHeader = 'BLAIZE-HMAC-SHA256 ' + accessKey + ':' +
timestamp + ':' + nonce + ':' + signature;

axios.get('https://admin.' + tenant + '.blaize.io' + path, {
    headers: {
        authorization: authorizationHeader
    }
});
```
