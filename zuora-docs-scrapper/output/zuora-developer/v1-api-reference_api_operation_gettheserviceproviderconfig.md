---
title: "GetTheServiceProviderConfig"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getTheServiceProviderConfig/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:39.216Z"
---

## Retrieve the service provider configuration

Returns Zuora’s service provider configuration.

Security**bearerAuth**

Responses

200

OK

401

Unauthorized - The request requires user authentication.

403

Forbidden - The server understands the request but refuses to authorize it.

404

Not Found - The requested resource could not be found.

get/scim/v2/ServiceProviderConfig

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://rest.test.zuora.com/scim/v2/ServiceProviderConfig \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>'

Response samples

-   200
-   401
-   403
-   404

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"


    ],

-   "patch": {

    -   "supported": true


    },

-   "bulk": {

    -   "supported": true,

    -   "maxOperations": 1000,

    -   "maxPayloadSize": 10000


    },

-   "filter": {

    -   "supported": true,

    -   "maxResults": 100


    },

-   "changePassword": {

    -   "supported": false


    },

-   "sort": {

    -   "supported": false


    },

-   "etag": {

    -   "supported": false


    },

-   "authenticationSchemes": [

    -   {

        -   "name": "Client Credentials",

        -   "description": "The client credentials (or other forms of client authentication) can be used as an authorization grant when the authorization scope is limited to the protected resources under the control of the client, or to protected resources previously arranged with the authorization server. Client credentials are used as an authorization grant typically when the client is acting on its own behalf (the client is also the resource owner) or is requesting access to protected resources based on an authorization previously arranged with the authorization server.\n",

        -   "specUri": "[https://www.rfc-editor.org/rfc/rfc6749#section-4.4](https://www.rfc-editor.org/rfc/rfc6749#section-4.4)",

        -   "type": "oauth2",

        -   "primary": true


        },

    -   {

        -   "name": "Authorization Grant",

        -   "description": "An authorization grant is a credential representing the resource owner's authorization (to access its protected resources) used by the client to obtain an access token. This specification defines four grant types -- authorization code, implicit, resource owner password credentials, and client credentials -- as well as an extensibility mechanism for defining additional types.\n",

        -   "specUri": "[https://www.rfc-editor.org/rfc/rfc6749#section-4.1](https://www.rfc-editor.org/rfc/rfc6749#section-4.1)",

        -   "type": "oauth2",

        -   "primary": false


        }


    ],

-   "meta": {

    -   "resourceType": "ServiceProviderConfig",

    -   "location": "[http://localhost:9900/scim/v2/ServiceProviderConfig](http://localhost:9900/scim/v2/ServiceProviderConfig)"


    }


}`
